export default function handler(req, res) {
  const caseStudies = [
    {
      id: 1,
      title: "Colonial Pipeline Ransomware Attack",
      date: "May 2021",
      impact: "Major fuel supply disruption in US East Coast",
      severity: "Critical"
    },
    {
      id: 2,
      title: "Attack Vector",
      description: "Compromised credentials, lack of MFA"
    },
    {
      id: 3,
      title: "Mitigation",
      steps: ["Enable MFA", "Regular backups", "Network segmentation", "Incident response planning"]
    }
  ];

  res.status(200).json({
    success: true,
    data: caseStudies,
    count: caseStudies.length
  });
}
