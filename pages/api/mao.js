export default function apiHandler(req, res) {
    return res.status(200).json({
        text: "This is mao api endpoint"
    });
}