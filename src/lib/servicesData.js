import {
  Zap,
  Sparkles,
  CircleDot,
  Smile,
  Scissors,
  Crown,
  Baby,
} from "lucide-react";

export const services = [
  {
    id: "root-canal",
    slug: "root-canal-treatment",
    icon: Zap,
    title: "Root Canal Treatment",
    tagline: "Save your natural tooth. Eliminate pain permanently.",
    shortDesc:
      "Pain-free RCT with advanced rotary instruments for fast, comfortable recovery.",
    fullDesc:
      "Our root canal treatments use the latest rotary instruments and apex locators to provide completely pain-free procedures. With modern anesthesia techniques, most patients report feeling no discomfort at all. We complete most RCTs in a single sitting, saving you time and multiple visits.",
    features: [
      "Single-sitting RCT available",
      "Advanced rotary instruments",
      "Digital X-ray guided",
      "Pain-free local anesthesia",
    ],
    heroColor: "from-blue-50 to-cyan-50",
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-50",
    procedure: [
      {
        step: "01",
        title: "Diagnosis & X-Ray",
        desc: "Digital X-rays help us precisely assess the infection and root structure before treatment begins.",
      },
      {
        step: "02",
        title: "Local Anaesthesia",
        desc: "Advanced numbing ensures you feel zero pain throughout the entire procedure.",
      },
      {
        step: "03",
        title: "Pulp Removal",
        desc: "Infected pulp tissue is removed using precision rotary instruments, cleaning the canals thoroughly.",
      },
      {
        step: "04",
        title: "Canal Shaping & Filling",
        desc: "Canals are shaped and filled with biocompatible gutta-percha material to seal out bacteria.",
      },
      {
        step: "05",
        title: "Crown Placement",
        desc: "A protective crown is placed to restore full strength and function to your treated tooth.",
      },
    ],
    benefits: [
      "Saves your natural tooth — no extraction needed",
      "Eliminates toothache and infection permanently",
      "Completed in a single visit in most cases",
      "Prevents spread of infection to neighbouring teeth",
      "Restored tooth looks and functions naturally",
      "Long-lasting results with proper care",
    ],
    faqs: [
      {
        q: "Is root canal treatment painful?",
        a: "No. With modern anesthesia and rotary techniques, most patients feel little to no pain. Many say it's no more uncomfortable than getting a regular filling.",
      },
      {
        q: "How long does the procedure take?",
        a: "Most root canal treatments at Nishat Dental are completed in a single sitting of 60–90 minutes. Complex cases may require two visits.",
      },
      {
        q: "How long will the treated tooth last?",
        a: "A properly treated and crowned root canal tooth can last a lifetime with good oral hygiene and regular checkups.",
      },
      {
        q: "What happens if I delay a root canal?",
        a: "Delaying treatment allows the infection to spread to the jawbone and surrounding teeth, often requiring more complex and costly treatment.",
      },
      {
        q: "Is the tooth weak after RCT?",
        a: "The tooth can become brittle, which is why we always recommend placing a crown afterward for full protection and strength.",
      },
    ],
    whatToExpect:
      "You will receive local anaesthesia so the area is completely numb. You may feel mild pressure but no pain. After the procedure, mild soreness for 1–2 days is normal and manageable with over-the-counter painkillers. You can return to normal activities the same day.",
    imagePrompt:
      "Close-up of a modern dental rotary root canal procedure being performed with precision instruments, high-key clinical lighting, sterile environment, no blood or gore, professional healthcare photography",
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    icon: Sparkles,
    title: "Teeth Whitening",
    tagline: "Brighter smile. Stronger confidence. In just one visit.",
    shortDesc:
      "Professional whitening for a brighter, more confident smile in just one visit.",
    fullDesc:
      "Get a noticeably brighter smile with our professional teeth whitening treatments. We use safe, clinically-proven whitening agents that can lighten your teeth by several shades in a single appointment. Our in-office whitening is faster and more effective than any over-the-counter product.",
    features: [
      "Visible results in one visit",
      "Safe & gentle formula",
      "Long-lasting brightness",
      "Customized treatment plan",
    ],
    heroColor: "from-yellow-50 to-amber-50",
    accentColor: "text-amber-600",
    bgAccent: "bg-amber-50",
    procedure: [
      {
        step: "01",
        title: "Shade Assessment",
        desc: "We photograph and assess your current tooth shade to set a measurable whitening goal.",
      },
      {
        step: "02",
        title: "Teeth Cleaning",
        desc: "A professional clean removes surface stains and plaque before whitening begins.",
      },
      {
        step: "03",
        title: "Gum Protection",
        desc: "Protective gel is applied to your gums and soft tissues to prevent sensitivity.",
      },
      {
        step: "04",
        title: "Whitening Gel Application",
        desc: "Professional-grade whitening gel is applied to the teeth surface in controlled cycles.",
      },
      {
        step: "05",
        title: "Results & Aftercare",
        desc: "Your new shade is compared to the before photo. Aftercare instructions ensure long-lasting results.",
      },
    ],
    benefits: [
      "Noticeably whiter teeth after just one session",
      "Safe for enamel when done professionally",
      "Boosts self-confidence and appearance",
      "Results last 1–2 years with proper care",
      "Faster and more effective than home kits",
      "Customized to your desired shade",
    ],
    faqs: [
      {
        q: "How many shades whiter will my teeth get?",
        a: "Most patients achieve 4–8 shades improvement in a single session. Results vary depending on the original colour and type of staining.",
      },
      {
        q: "Is teeth whitening safe?",
        a: "Yes. Professional whitening at a clinic is completely safe. Our dentist applies protective measures to ensure your gums and enamel are not harmed.",
      },
      {
        q: "Will my teeth become sensitive?",
        a: "Mild, temporary sensitivity is possible for 24–48 hours after treatment. We use desensitising agents to minimise this.",
      },
      {
        q: "How long do results last?",
        a: "With good oral hygiene and avoiding stain-causing foods/drinks, results typically last 12–24 months.",
      },
      {
        q: "Can everyone get teeth whitening?",
        a: "Whitening is ideal for healthy teeth with natural staining. It does not work on crowns, veneers, or fillings. A pre-treatment assessment determines suitability.",
      },
    ],
    whatToExpect:
      "The entire procedure takes about 60–90 minutes. You'll be comfortably reclined as the gel works. You may feel mild tingling. Avoid coffee, tea, and coloured foods for 48 hours post-treatment for best results.",
    imagePrompt:
      "Beautiful Indian woman with a radiant bright white smile after teeth whitening treatment, close-up portrait with warm natural lighting, high-key commercial photography, soft bokeh background in a modern dental clinic",
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    icon: CircleDot,
    title: "Dental Implants",
    tagline: "Permanent teeth that look, feel, and function like natural.",
    shortDesc:
      "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
    fullDesc:
      "Dental implants are the gold standard for replacing missing teeth. Our implants are made from biocompatible titanium and are placed with surgical precision using digital planning. They provide a permanent, stable foundation for crowns, bridges, or dentures.",
    features: [
      "Premium titanium implants",
      "Digital surgical planning",
      "Natural look & feel",
      "Lifetime durability",
    ],
    heroColor: "from-teal-50 to-cyan-50",
    accentColor: "text-teal-600",
    bgAccent: "bg-teal-50",
    procedure: [
      {
        step: "01",
        title: "Consultation & Scanning",
        desc: "A thorough examination and digital X-ray assess bone density and placement suitability.",
      },
      {
        step: "02",
        title: "Implant Placement",
        desc: "A titanium post is surgically inserted into the jawbone under local anaesthesia with minimal discomfort.",
      },
      {
        step: "03",
        title: "Osseointegration",
        desc: "Over 3–6 months, the implant fuses naturally with the jawbone — creating a permanent root.",
      },
      {
        step: "04",
        title: "Abutment Fitting",
        desc: "A small connector piece is attached to the implant post to hold the crown.",
      },
      {
        step: "05",
        title: "Crown Placement",
        desc: "A custom-made, natural-looking crown is fixed to the abutment, completing your new tooth.",
      },
    ],
    benefits: [
      "Permanent solution — lasts a lifetime with care",
      "Prevents jawbone loss after tooth extraction",
      "Looks, feels, and functions like a real tooth",
      "No impact on adjacent healthy teeth",
      "No denture adhesives or removable parts",
      "Restores full biting force",
    ],
    faqs: [
      {
        q: "Is dental implant surgery painful?",
        a: "The surgery is performed under local anaesthesia, so you won't feel pain during the procedure. Post-operative discomfort is manageable with prescribed medication.",
      },
      {
        q: "How long does the full implant process take?",
        a: "From placement to final crown, the process typically takes 4–6 months, allowing time for osseointegration (bone fusion).",
      },
      {
        q: "Am I a good candidate for implants?",
        a: "Most adults with good general health and sufficient jawbone density are candidates. Dr. Kamil will evaluate your suitability during consultation.",
      },
      {
        q: "How long do dental implants last?",
        a: "With proper oral hygiene and regular dental visits, implants can last 20–25 years or even a lifetime.",
      },
      {
        q: "What is the success rate of dental implants?",
        a: "Dental implants have a 95–98% success rate globally, making them the most reliable tooth replacement option available.",
      },
    ],
    whatToExpect:
      "The implant surgery itself takes about 1 hour per implant under local anaesthesia. You'll be prescribed antibiotics and painkillers. Mild swelling and tenderness for 3–5 days is normal. Most patients resume normal activities within 24–48 hours.",
    imagePrompt:
      "Professional dental illustration concept showing a titanium dental implant being placed in a jaw model, clean clinical environment, modern dental clinic, high-key lighting, professional medical photography style",
  },
  {
    id: "braces-aligners",
    slug: "braces-and-aligners",
    icon: Smile,
    title: "Braces & Aligners",
    tagline: "A straighter, more confident smile — at any age.",
    shortDesc:
      "Straighten your teeth with traditional braces or invisible clear aligners.",
    fullDesc:
      "Achieve a perfectly aligned smile with our orthodontic treatments. We offer traditional metal braces, ceramic braces, and modern clear aligners. Dr. Kamil creates a personalized treatment plan to give you the best results in the shortest time.",
    features: [
      "Metal & ceramic braces",
      "Clear aligner options",
      "Customized treatment plans",
      "Regular progress tracking",
    ],
    heroColor: "from-purple-50 to-indigo-50",
    accentColor: "text-purple-600",
    bgAccent: "bg-purple-50",
    procedure: [
      {
        step: "01",
        title: "Orthodontic Assessment",
        desc: "Digital X-rays and impressions map your bite, jaw, and tooth positions comprehensively.",
      },
      {
        step: "02",
        title: "Treatment Planning",
        desc: "Dr. Kamil designs a personalised plan — choosing between braces or aligners based on your case.",
      },
      {
        step: "03",
        title: "Fitting Braces/Aligners",
        desc: "Braces are bonded to teeth or aligners are fitted. The process is quick and comfortable.",
      },
      {
        step: "04",
        title: "Regular Adjustments",
        desc: "Monthly check-up visits allow Dr. Kamil to track progress and adjust the treatment as needed.",
      },
      {
        step: "05",
        title: "Retainer Phase",
        desc: "After braces removal, retainers are provided to maintain your new, perfectly aligned smile.",
      },
    ],
    benefits: [
      "Corrects crooked, crowded, or gapped teeth",
      "Improves bite alignment and jaw function",
      "Clear aligners are virtually invisible",
      "Suitable for children, teens, and adults",
      "Boosts long-term oral health and hygiene",
      "Enhances facial aesthetics and confidence",
    ],
    faqs: [
      {
        q: "What is the ideal age to start braces?",
        a: "Braces are most effective in adolescence (12–16 years), but adults can also achieve excellent results. There is no upper age limit for orthodontic treatment.",
      },
      {
        q: "How long will I need to wear braces?",
        a: "Treatment duration typically ranges from 12 to 24 months depending on the complexity of your case.",
      },
      {
        q: "Are clear aligners as effective as traditional braces?",
        a: "Clear aligners are very effective for mild to moderate alignment issues. For complex cases, traditional braces may be recommended for best results.",
      },
      {
        q: "Do braces hurt?",
        a: "You may feel mild pressure and soreness for 2–3 days after each adjustment, which is temporary. Most patients adapt quickly.",
      },
      {
        q: "Will braces affect my speech or eating?",
        a: "There is a short adjustment period. Aligners are removable for meals. With braces, some sticky or hard foods should be avoided.",
      },
    ],
    whatToExpect:
      "Fitting takes about 1–2 hours. You'll receive care instructions and dietary guidelines. Monthly follow-up visits (20–30 minutes each) track your progress. Aligners are worn 20–22 hours daily and changed every 1–2 weeks.",
    imagePrompt:
      "Close-up of a young Indian person smiling showing clear ceramic dental braces on white teeth, bright modern dental clinic background, high-key healthcare photography, warm natural lighting",
  },
  {
    id: "tooth-extraction",
    slug: "tooth-extraction",
    icon: Scissors,
    title: "Tooth Extraction",
    tagline: "Safe, painless removal with expert surgical precision.",
    shortDesc:
      "Safe and painless tooth removal with expert surgical precision.",
    fullDesc:
      "When a tooth cannot be saved, our extraction procedures are performed with the utmost care and precision. We use advanced anesthesia techniques to ensure a completely pain-free experience. Post-extraction care guidance is provided to ensure fast healing.",
    features: [
      "Painless extraction",
      "Wisdom tooth removal",
      "Surgical extractions",
      "Quick recovery guidance",
    ],
    heroColor: "from-red-50 to-rose-50",
    accentColor: "text-rose-600",
    bgAccent: "bg-rose-50",
    procedure: [
      {
        step: "01",
        title: "Clinical Examination",
        desc: "A thorough X-ray assessment determines the complexity and best approach for extraction.",
      },
      {
        step: "02",
        title: "Anaesthesia Administration",
        desc: "Local anaesthesia fully numbs the area — you will feel pressure but zero pain.",
      },
      {
        step: "03",
        title: "Tooth Loosening",
        desc: "The tooth is gently rocked with precise instruments to loosen it from the socket.",
      },
      {
        step: "04",
        title: "Extraction",
        desc: "The tooth is removed carefully. For surgical cases, a small incision may be made for access.",
      },
      {
        step: "05",
        title: "Aftercare Instructions",
        desc: "Gauze is placed over the socket. Detailed healing and care instructions are provided.",
      },
    ],
    benefits: [
      "Eliminates pain from damaged or infected teeth",
      "Prevents spread of infection",
      "Creates space for orthodontic treatment",
      "Wisdom tooth removal prevents future crowding",
      "Quick procedure with fast healing",
      "Replacement options discussed same day",
    ],
    faqs: [
      {
        q: "Is tooth extraction painful?",
        a: "No. With proper local anaesthesia, you should feel no pain during extraction — only mild pressure or movement. Post-extraction soreness is normal and short-lived.",
      },
      {
        q: "How long does healing take?",
        a: "Initial healing of the gum takes 1–2 weeks. The underlying bone heals over 3–6 months. Most patients resume normal activity within 24 hours.",
      },
      {
        q: "Can I eat after extraction?",
        a: "Stick to soft foods and avoid hot beverages for 24 hours. Avoid chewing on the extraction side for a few days.",
      },
      {
        q: "What is a dry socket?",
        a: "A dry socket occurs when the blood clot dislodges prematurely. We provide detailed aftercare instructions to prevent this. If it occurs, we treat it promptly.",
      },
      {
        q: "Should I replace the extracted tooth?",
        a: "Yes — we strongly recommend replacing any missing tooth with an implant, bridge, or denture to prevent bone loss and shifting of adjacent teeth.",
      },
    ],
    whatToExpect:
      "The procedure is quick — typically 20–40 minutes. You'll be numb throughout. Bite on gauze for 30–45 minutes afterward. Avoid smoking, drinking through straws, and rinsing forcefully for 24 hours to protect the clot.",
    imagePrompt:
      "Modern dental clinic setting with a patient comfortably sitting in a dental chair before a procedure, warm clinical lighting, clean and sterile environment, reassuring and professional healthcare atmosphere, no graphic content",
  },
  {
    id: "crowns-bridges",
    slug: "crowns-and-bridges",
    icon: Crown,
    title: "Crowns & Bridges",
    tagline: "Restore your smile with beautiful, durable restorations.",
    shortDesc:
      "Restore damaged or missing teeth with durable, natural-looking restorations.",
    fullDesc:
      "Our dental crowns and bridges are crafted from premium materials including zirconia and porcelain to perfectly match your natural teeth. They restore both function and aesthetics, giving you a complete, beautiful smile that lasts for years.",
    features: [
      "Zirconia & porcelain options",
      "Precise color matching",
      "Same-day impressions",
      "Long-lasting durability",
    ],
    heroColor: "from-orange-50 to-yellow-50",
    accentColor: "text-orange-600",
    bgAccent: "bg-orange-50",
    procedure: [
      {
        step: "01",
        title: "Tooth Preparation",
        desc: "The damaged tooth is reshaped under anaesthesia to create the ideal surface for crown placement.",
      },
      {
        step: "02",
        title: "Impressions",
        desc: "Precise digital or physical impressions of your teeth are taken to fabricate a perfectly fitting restoration.",
      },
      {
        step: "03",
        title: "Temporary Crown",
        desc: "A temporary crown protects your prepared tooth while the permanent one is being fabricated.",
      },
      {
        step: "04",
        title: "Shade Matching",
        desc: "We precisely match the crown colour to your adjacent teeth for a completely natural appearance.",
      },
      {
        step: "05",
        title: "Permanent Fitting",
        desc: "The final crown or bridge is cemented in place and adjusted for the perfect bite.",
      },
    ],
    benefits: [
      "Restores full strength to a damaged tooth",
      "Natural appearance — indistinguishable from real teeth",
      "Zirconia crowns are metal-free and biocompatible",
      "Bridges fill gaps without surgery",
      "Protects root-canal treated teeth",
      "Lasts 10–15 years with proper care",
    ],
    faqs: [
      {
        q: "What is the difference between a crown and a bridge?",
        a: "A crown covers and protects a single damaged tooth. A bridge spans a gap between teeth, using adjacent teeth as supports to hold a false tooth in the middle.",
      },
      {
        q: "Are zirconia crowns better than metal ones?",
        a: "Zirconia crowns are stronger than porcelain, completely metal-free, highly aesthetic, and biocompatible — making them the preferred choice for most patients today.",
      },
      {
        q: "How long do crowns and bridges last?",
        a: "With good oral hygiene and regular dental check-ups, crowns and bridges typically last 10–15 years or longer.",
      },
      {
        q: "Will the crown look natural?",
        a: "Absolutely. We precisely match the shade, shape, and translucency of your natural teeth for a seamless, invisible result.",
      },
      {
        q: "Is the procedure painful?",
        a: "Tooth preparation is done under local anaesthesia, ensuring complete comfort. Post-procedure sensitivity is mild and temporary.",
      },
    ],
    whatToExpect:
      "Crown preparation takes 1–1.5 hours. A temporary crown is placed while your permanent one is fabricated (5–7 days). The fitting appointment takes 30–45 minutes. You can eat normally after the final crown is cemented.",
    imagePrompt:
      "Dental zirconia crown and bridge restorations on a model, pristine white porcelain crowns perfectly matched to natural teeth color, professional dental laboratory photography, clean clinical background, high detail macro shot",
  },
  {
    id: "kids-dentistry",
    slug: "kids-dentistry",
    icon: Baby,
    title: "Kids Dentistry",
    tagline: "Making every child's dental visit fun and fear-free.",
    shortDesc:
      "Gentle, fun, and child-friendly dental care for your little ones.",
    fullDesc:
      "We create a positive dental experience for children with our gentle approach and child-friendly environment. From routine cleanings to cavity treatments, we ensure your child feels safe and comfortable. Early dental care sets the foundation for a lifetime of healthy smiles.",
    features: [
      "Child-friendly environment",
      "Gentle & patient approach",
      "Preventive dental care",
      "Fun & educational visits",
    ],
    heroColor: "from-green-50 to-emerald-50",
    accentColor: "text-emerald-600",
    bgAccent: "bg-emerald-50",
    procedure: [
      {
        step: "01",
        title: "Friendly Introduction",
        desc: "We introduce the clinic, chair, and tools in a fun, age-appropriate way to put your child at ease.",
      },
      {
        step: "02",
        title: "Gentle Examination",
        desc: "A thorough but gentle check of teeth, gums, bite, and jaw development is performed.",
      },
      {
        step: "03",
        title: "Professional Cleaning",
        desc: "Teeth are cleaned with child-safe polishing paste to remove plaque and make them shine.",
      },
      {
        step: "04",
        title: "Fluoride Treatment",
        desc: "Fluoride varnish is applied to strengthen enamel and protect against cavities.",
      },
      {
        step: "05",
        title: "Parent Guidance",
        desc: "We educate both child and parent on brushing technique, diet tips, and the next care steps.",
      },
    ],
    benefits: [
      "Builds positive dental habits from an early age",
      "Prevents tooth decay with fluoride and sealants",
      "Detects developmental issues early",
      "Reduces dental anxiety for life",
      "Child-friendly atmosphere and communication",
      "Educational guidance for parents",
    ],
    faqs: [
      {
        q: "When should I bring my child for their first dental visit?",
        a: "We recommend the first visit around their 1st birthday or when the first tooth appears — whichever comes first.",
      },
      {
        q: "How often should children visit the dentist?",
        a: "Every 6 months for routine checkups and cleaning. More frequent visits may be needed if your child is prone to cavities.",
      },
      {
        q: "My child is afraid of the dentist. What do you do?",
        a: "Dr. Kamil is experienced with anxious children. We use gentle language, show-tell-do techniques, and a calm, friendly environment to ease fears.",
      },
      {
        q: "Are X-rays safe for children?",
        a: "Yes. We use digital X-rays which emit very minimal radiation — far less than traditional film X-rays. They are only taken when clinically necessary.",
      },
      {
        q: "What are dental sealants?",
        a: "Sealants are thin protective coatings applied to the chewing surfaces of back teeth. They are highly effective at preventing cavities in children.",
      },
    ],
    whatToExpect:
      "Visits are relaxed and unhurried. We explain everything to your child step-by-step. Most routine visits take 30–45 minutes. Dr. Kamil will discuss any findings with parents and provide a simple home-care plan.",
    imagePrompt:
      "Happy smiling young Indian child sitting in a modern dental chair, friendly pediatric dentist in white coat showing the child a dental mirror toy, bright cheerful clinic environment, warm natural lighting, fun and reassuring healthcare atmosphere",
  },
];
