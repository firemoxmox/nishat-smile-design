{
  "name": "Appointment",
  "type": "object",
  "properties": {
    "patient_name": {
      "type": "string",
      "description": "Full name of the patient"
    },
    "phone": {
      "type": "string",
      "description": "Phone number"
    },
    "email": {
      "type": "string",
      "description": "Email address"
    },
    "service": {
      "type": "string",
      "enum": [
        "Root Canal Treatment",
        "Teeth Whitening",
        "Dental Implants",
        "Braces & Aligners",
        "Tooth Extraction",
        "Crowns & Bridges",
        "Kids Dentistry",
        "General Checkup",
        "Other"
      ],
      "description": "Service requested"
    },
    "preferred_date": {
      "type": "string",
      "format": "date",
      "description": "Preferred appointment date"
    },
    "preferred_time": {
      "type": "string",
      "enum": [
        "Morning (9-12)",
        "Afternoon (12-3)",
        "Evening (3-6)",
        "Late Evening (6-9)"
      ],
      "description": "Preferred time slot"
    },
    "message": {
      "type": "string",
      "description": "Additional message or concern"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "confirmed",
        "completed",
        "cancelled"
      ],
      "default": "pending",
      "description": "Appointment status"
    }
  },
  "required": [
    "patient_name",
    "phone",
    "service"
  ]
}