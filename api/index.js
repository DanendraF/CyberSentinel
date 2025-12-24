export default function handler(req, res) {
  res.status(200).json({
    message: "Cybersentinel API",
    version: "1.0.0",
    status: "online"
  });
}
