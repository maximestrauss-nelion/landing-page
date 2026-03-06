<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if ($data) {
        $lastName = $data['lastName'] ?? '';
        $firstName = $data['firstName'] ?? '';
        $pharmacyName = $data['pharmacyName'] ?? '';
        $phone = $data['phone'] ?? '';
        $email = $data['email'] ?? '';
        $need = $data['need'] ?? '';
        $submissionType = $data['submissionType'] ?? 'audit';
        $offerName = $data['offerName'] ?? '';
        
        $to = "contact@nelion.fr";
        $subject = ($submissionType === 'reservation') ? "Nouvelle réservation accompagnement" : "NELION - demande de nouvel audit";
        
        if (!empty($offerName)) {
            $subject = "NELION - Réservation [$offerName]";
        }
        
        $message = "Nouveau prospect Nelion Consulting !\n\n";
        if ($submissionType === 'reservation') {
            $message = "Nouvelle réservation d'accompagnement : " . ($offerName ?: 'Standard') . "\n\n";
        }
        
        $message .= "Détails :\n";
        $message .= "- Nom : $lastName $firstName\n";
        $message .= "- Pharmacie : $pharmacyName\n";
        $message .= "- Téléphone : $phone\n";
        $message .= "- Email : $email\n";
        $message .= "- Besoin : $need\n";
        $message .= "- Type : $submissionType\n";
        if (!empty($offerName)) {
            $message .= "- Offre choisie : $offerName\n";
        }
        $message .= "\nDate : " . date("d/m/Y H:i:s");
        
        $headers = "From: webmaster@nelion.fr\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["success" => true, "message" => "Lead processed successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Error sending email"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid data"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
}
?>
