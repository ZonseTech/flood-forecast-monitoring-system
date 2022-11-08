<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With');

try {
    $conn = mysqli_connect("localhost", "root", "", "ffhms");    
} catch (\Throwable $th) {
    echo json_encode([
        "message" =>  $th->getMessage(),
    ]);
}

function index($conn) {
    $data = [];
    $type = $_GET['type'];

    $sql = "SELECT id, $type, createdAt FROM main_table";
    $result = $conn->query($sql);
    $conn->close();
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode([
        "status" => true,
        "data" => $data,
    ]);
}

function save($conn) {

    try {
        $temperature = $_GET['temperature'];
        $humidity = $_GET['humidity'];
        $waterLevel = $_GET['waterLevel'];
        $waterFlow = $_GET['waterFlow'];

        $stmt = $conn->prepare("INSERT INTO main_table (temperature, humidity, waterLevel, waterFlow) VALUES(?,?,?,?)");

        $stmt->bind_param("ssss", $temperature, $humidity, $waterLevel, $waterFlow);

        $isSaved = $stmt->execute();
        
        if ($isSaved) {
            $message = "Data saved successfully!";
        } else {
            $message = "Problem in Adding New Record.";
        }

        $stmt->close();
        $conn->close();

        return json_encode([
            "status" => $isSaved,
            "message" => $message    
        ]);

    } catch (\Throwable $th) {
        echo json_encode([
            "status" => "SQL error.",
            "message" =>  $th->getMessage(),
        ]);
    }
}

switch ($_GET['action'] ?? null) {
    case 'save':
        
        echo save($conn);
        return;

    case 'list':

        return index($conn);
    
    default:
        break;
}


echo json_encode([
    "status" => false,
    "message" => "Unknown request",
]);
