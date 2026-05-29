import { Product } from "@/types/product";

export const CATEGORIES = [
  { id: "seating", name: "Seating", slug: "seating" },
  { id: "desks", name: "Desks", slug: "desks" },
  { id: "lighting", name: "Lighting", slug: "lighting" },
  { id: "accessories", name: "Accessories", slug: "accessories" },
];

export const PRODUCTS: Product[] = [
  {
    id: "linear-75",
    slug: "linear-75",
    name: "Linear-75 Keyboard",
    category: "accessories",
    price: 189,
    description: "Precision engineered for focused professionals. A compact 75% layout crafted from aerospace-grade aluminum.",
    details: "The Linear-75 keyboard represents the pinnacle of modern workstation input devices. Offering a beautiful mechanical action that is meticulously factory-lubricated, it is designed for developers, writers, and artists who demand tactile perfection without disrupting their focus. It has a heavy, solid body CNC-milled from 6063 aerospace-grade aluminum, satisfying your need for both weight and durability.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDysSHcJ3Zpj85XTF-4BCRCaXRti066E3jX0M93p1keMxMc_Qk0ZPLv_YMzYcgsKkUDv5LDL5OBgvkB4edRUERl_H2k81b7viJ2NnOn7CrJg0YOTd-3XDVdJG5b0d6wAX-Gs_Fs1cZxbSbJtIwXs6HIz7oV4-1fq1skPeXpqMPmN5eiui0TyCtuYJNPhIjYuOkYTHIDNMrllHUtmUtAIt0NnsabeGxDCJnEATFLLZwVr0nfeQ1wz_qb22m1DA6XFmMICWAEuxD3G4oK",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCR7sw9u_j3SzUP5V-IwD0uMwZdG8zpM3LR9v9gxUPE3Fa9P5-juSuVWNWGg9fteevUa0PRixBP5BwxtyyRMpgmqvkihFNyFoP_48JqTROYietWmnXn0ZUcMm3uytlnh3HeRXz6Gzc2d-k8RsnU4RrwhX15S-Q2dackZn4OsMzYrvDSN2RUFBZCtWh6x7ESGC2sx9TFVVAaFbzqh4ArZ7p-MjTb_TEzl2q952rXBxWdu_jmLSS8XyIdLGvmhLa0r7rxOo50LNmUprli",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJi7StEjyu93c9SoUCYAE3jlLGKNEFaxZ9I2Kr_mAyEHrCDv2HKqdAzC90SObUJ90JBxhsy8OuvF4k1bVSZh8fWD8sQzam6KSTyj91WxlYI_Js2PAAfiPmbAKPX3SyHovWyVSRuJO18iCXLXdZy4HrwcMj70LaiG49JNLYEe-Dh7Korfh6E98F2cEnsRhhVYcHT15ibwyhjqU-eRI8u9kyHWvNjuuopcDk6Idh0M44acCp4li3Jv2HT8sSLFXjwvtaENi4i-TjOSF",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPzrJiEdMrL5HaPkur99zHNpbolbv7C_ahbbVZjUUfsAxMig1RjjSH08MxRiJH2jcj0G2DM0rYiT6W-iDqRxX_L5K0x1B-Ocj_WfiFjaT2o7-eO4QyKuxuEFZ1AGOuvFFZt0fuk2KBdmxMZoWV31_-MTyqVpf7T3s80FPkB1xa3jubKBQoBtz4vM69SDuPYhXwFJapBbuh3vM3Q9sO9yeParGmSx4pUv_8ETMsfKNfiOE7vTD3jtE_Cu--HYgS6PStNsP9EpS_YGoD"
    ],
    specs: [
      { label: "Build Material", value: "CNC-machined 6063 aluminum case with a bead-blasted, anodized finish" },
      { label: "Switches", value: "Hot-swappable PCB fitted with Elevate Linear Silents (45g actuation). Factory lubricated." },
      { label: "Connectivity", value: "Tri-mode: Wired USB-C, Bluetooth 5.1 (up to 3 devices), and 2.4GHz wireless via dongle." },
      { label: "Battery Life", value: "4000mAh battery providing up to 200 hours of typing with RGB off, or 40 hours with backlighting." },
      { label: "Layout", value: "75% space-saving layout retaining arrow keys and function row" }
    ],
    features: [
      "Aerospace-Grade 6063 Aluminum",
      "Custom Factory-Lubricated Linear Switches",
      "Tri-Mode Wireless Connectivity",
      "Poron Gasket Mount Plate System",
      "Tri-Layer Sound Dampening Foam"
    ],
    rating: 4.9,
    reviewsCount: 128,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Alex M.",
        rating: 5,
        date: "Oct 12, 2025",
        content: "The build quality is exceptional. The silent linear switches feel incredibly smooth, making it perfect for office use without compromising on the typing feel."
      },
      {
        id: "r2",
        author: "Sarah J.",
        rating: 5,
        date: "Sep 28, 2025",
        content: "Aesthetically stunning and acoustically pleasing. It looks like a piece of modern architecture on my desk."
      }
    ]
  },
  {
    id: "tactile-01",
    slug: "tactile-01",
    name: "Tactile Model 01",
    category: "accessories",
    price: 185,
    description: "Premium mechanical keyboard with dark charcoal and light grey keycaps, designed for absolute tactile feedback.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD1xjCSyTqwiWWFFdIYHs-ezORGr10yhzX72ylKuiHgF3oHq6N2DOe9F1GKqhnkl_B6i_Xm_c4pIELt_dJSo7Z_EB3dqRPuR5QwfrA4WAc3b5AkNuVwl8-UXBai6PnZ7Mn37Iv4zkcEpJroFSILkc2w5XajumyPdtglhtTEC1R_Zs2dUvlesFDzRotHmpxTkprcVXtB6ANwssyyQQpRtuQC7ZoGFROON8gXAwTP9qr3Q-sdcHG-HBrOMKwtpQ4UFSMwvUy0dLeTNMx3"],
    specs: [
      { label: "Switches", value: "Elevate Tactile Browns (55g tactile bump)" },
      { label: "Layout", value: "80% Tenkeyless (TKL) form factor" },
      { label: "Material", value: "Reinforced polycarbonate body with steel plate" }
    ],
    rating: 4.8,
    reviewsCount: 94,
    inStock: true
  },
  {
    id: "merino-foundation",
    slug: "merino-foundation",
    name: "Merino Foundation Desk Mat",
    category: "accessories",
    price: 60,
    description: "Sustainably sourced dark charcoal merino wool felt desk mat, adding texture and warmth to your desk.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDPM0d3y_JLz3tGRoWziS9Fd-YahfTQTPg59RsZCPGLjJa61ewbPCSc4e1QD8WQBh3xU1bOjO1LQU1Mrlf4nVyp5j3G7KcOSJIjsJdM5OjYkuM9KeAwNmRWyWdmkW7AFEFGF1O480cro9BoQtiJtoshjn5xghnBqWwe-GF_JZujlYdBoWivVBt337obVyi0GOcug0E4ES0IResWJshZvOkjaSfkw1ZO60i2zymDHrI1bxumlEyK8CD6zRGOW9cINdghdpDZoIdFncuR"],
    specs: [
      { label: "Material", value: "100% Merino Wool Felt top, natural cork bottom" },
      { label: "Dimensions", value: "900mm x 400mm x 4mm" }
    ],
    rating: 4.7,
    reviewsCount: 312,
    inStock: true
  },
  {
    id: "axis-r1",
    slug: "axis-r1",
    name: "Axis R1 Monitor Arm",
    category: "accessories",
    price: 140,
    description: "Sleek articulating monitor arm made of brushed aluminum, offering smooth architectural order.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA6f1hxPPaq4GI9TKJBF-tytpGJu4FPf69ykYZLeuYWz_YueC3gQ0dUBramImG8MybflXFzWrqRTsiwEh1sGkxev_RUxa1vAJkrtJst8uw5No_45BxH16EWBy-GAaSLm-rLKnWYRL4RDN46v7-zI12gYi8btX3Tg8ETBXmffYIBN3yVI0Z_tp4LiPCtRkZpRZD_dHF88-I_oFac5T2nmVtG5fmR6-vjJL7VxejfdoAFRY7YXDTuElH5aoT9ne-DfvkA5lcorcwtOva9"],
    specs: [
      { label: "Material", value: "Aerospace-grade billet aluminum" },
      { label: "Capacity", value: "Supports screens from 17\" to 34\", up to 9kg" },
      { label: "Tilt / Pivot", value: "+90°/-15° tilt, 360° rotation, 180° swivel" }
    ],
    rating: 4.9,
    reviewsCount: 76,
    inStock: true
  },
  {
    id: "contour-v2",
    slug: "contour-v2",
    name: "Contour V2 Mouse",
    category: "accessories",
    price: 95,
    description: "Ergonomic wireless mouse with sculpted matte black finish, quiet click mechanism, and optical precision.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA-PYqwQ9u9HrpKdGOH6nXrfg6w1IFI_AM0IumZrI_LIxPRmE6jPUU4a_P7-Td90KTg9pPTF6HlGXvluo5QiKrj48vbwtPooavGFFsF8LYmyuqYsxuQFZ2W5MP3CwpkI0jOPlw7B441oLp6Jx0QP-fO1DIwC2w3NFavc8eEWpnONIghhl9XFDcUNeh-2KhYd2OVmsKAbddTQCfhhruEf_kRMk4hsndySVFZ91l1ydsQbJaNsZpJx3XvUtvUV_F7qD7UPjbapdCDR5_M"],
    specs: [
      { label: "Sensor", value: "PixArt 16,000 DPI adjustable optical sensor" },
      { label: "Battery Life", value: "Up to 70 hours continuous wireless use" },
      { label: "Weight", value: "72g ultralight weight" }
    ],
    rating: 4.8,
    reviewsCount: 154,
    inStock: true
  },
  {
    id: "architect-desk",
    slug: "architect-desk",
    name: "The Architect Desk",
    category: "desks",
    price: 1250,
    description: "Sleek, minimalist drafting desk made of matte black steel and solid dark walnut wood.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBGXRjuPuzvkOJrekqK-t0bsBPPuKAcaNX7ICxZRfuUP5WSi75XWwvd_UXUHZmW0QI7D1j4AzXaFIzWXSP1rCyu77cpUTNh5wdxV9jiHhkYf74V0iWsF_WmowI297N5Y9dvf3_CIUI-pCVePSmI69GUYmEkN2bSPXnRzYtUNgD4_tTe4eduboKAsxKZA92pwghYd4jJwb51Pmha7MyMbVDxnZb-nA4kjsyXCx6QxsK4r5XIyMsyOzX0y5nvhY9ibOeMDBpAtC-9cZzJ"],
    specs: [
      { label: "Top Material", value: "Solid American Walnut (30mm thickness), FCS certified" },
      { label: "Base", value: "Industrial matte black powder-coated structural steel" },
      { label: "Dimensions", value: "150cm x 75cm x 74cm" }
    ],
    rating: 4.9,
    reviewsCount: 42,
    inStock: true
  },
  {
    id: "aero-task-chair",
    slug: "aero-task-chair",
    name: "Aero Task Chair",
    category: "seating",
    price: 895,
    description: "High-end ergonomic task chair featuring polished aluminum frame and premium grey mesh fabric.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4L7kNlRkL5av2OL-cKc7Vk36_wrjj5WkRk7l1HukDHzq_icFRe7qvetesVu1zsLUSS1LfhqtndiIWSSuTAg-8HFtPAPPyBAzFGf33m2MZq0kwAmWX8Yy8jERu0v3ES1d_i2D68yLiLY2cXPWuAtf_nwnmHBnS4YcwZxFYAE2tySQ_XZ5iYCqN3TI-wpoT-QuWd3leGN8aCmWNMIoC8cof3uWc1rKlhmMvApYD3uWNTKYSSjlO0u6poKG8SDredUOHEr_U4xNgvNh"],
    specs: [
      { label: "Mesh", value: "High-tensile elastomer mesh, self-tensioning and breathable" },
      { label: "Base", value: "Polished heavy-duty structural aluminum" },
      { label: "Adjustments", value: "4D armrests, active lumbar support, tilt lock, tension adjust" }
    ],
    rating: 4.9,
    reviewsCount: 68,
    inStock: true
  },
  {
    id: "lumina-task-light",
    slug: "lumina-task-light",
    name: "Lumina Task Light",
    category: "lighting",
    price: 240,
    description: "Slender, geometrically precise desk lamp constructed from brushed aluminum, emitting warm focused light.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCIhpCg8zZDgUm-kHKSga_8kROLmTQdGU8db_Dtow1YwZyTWjsg95XbE3CZ6qY_4_kuzXnzKnGBGFA2h7DYLd92nSBm4taUSfKu21u71uyFW5IhWWv4xL9XbUSu5M7WW17Hy6n5ZEvGGX6kmzS1Tqq6ob9OMNf-YWG8SmgFnP7QZTxX1jpdXHrcsYDdsioXv6gbQ-lIrasHX___xILD1NWbH-zWHmNkK5V_O_eKnfyE29FRx4dRMAiMeRymcLBW-HGxo2iWY7ry7ZVX"],
    specs: [
      { label: "Material", value: "Anodized brushed aluminum and stainless steel linkages" },
      { label: "Light Quality", value: "CRI > 95, adjustable temperature (2700K - 6500K), flickering-free LED" },
      { label: "Control", value: "Touch-capacitive slider for dimming and temperature control" }
    ],
    rating: 4.8,
    reviewsCount: 57,
    inStock: true
  },
  {
    id: "felt-desk-mat-medium",
    slug: "felt-desk-mat-medium",
    name: "Felt Desk Mat",
    category: "accessories",
    price: 45,
    description: "Premium wool felt desk mat in dark grey, laid flat to support your workspace objects.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBeS7X3WzVLNkOxjWUX50zPf9EW1ECWTT2Lpxr4NlMbH1t2cbjvifXTv9CyhWyg3o4NAJKl-H1JVKRlN8WawobiR4OP3KeUppKNgwjuHepYtpPvN9WVZEglj0tWuCb6-4zPmALraAMCHu8DRsocGxeQ09u4YKx8bt57Kz5jejlWOO44r9vlndlopi1dwa2EDHBTUQv5z56pcpCEwVOIP68srJiC4Il5HJbzXhSDeplK2GAUDdYLoUU_2Ddwja0O0GK6DLrItiwZ4kQj"],
    specs: [
      { label: "Material", value: "100% natural wool felt" },
      { label: "Dimensions", value: "700mm x 300mm x 3.5mm" }
    ],
    rating: 4.6,
    reviewsCount: 88,
    inStock: true
  },
  {
    id: "ergo-mouse-pro",
    slug: "ergo-mouse-pro",
    name: "Ergo Mouse Pro",
    category: "accessories",
    price: 89,
    description: "Sleek, ergonomic wireless mouse in a matte black finish with sculpted vertical grip.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCZbC9IWAeFDnSyopnzTTInnsxhSe8JYfPE0x6egyefeQopV6uPFnUo5JdO2CVevxhfX7AZfM8zGeo-nKweWSzpLCSxPRo49aBlTLV88Odn3-755pqyB2ClkDCFYvN6yiyqcq4qv1HMwiusnFJT3PyCNctJ6jGYP6RM6eWFsdVYYzFeIYYQVYZCR6MZOKUXrByb0DiH2MNXjaAusaZ5YjpI7b20RKIQHrvWNlw7MDhtkgXL-FD9aMswU_xlsE1xJ-3yPxvIp1ChgZUk"],
    specs: [
      { label: "Grip Angle", value: "57° vertical hand position to reduce wrist pressure" },
      { label: "Connection", value: "Logi Bolt wireless receiver and Bluetooth LE" }
    ],
    rating: 4.7,
    reviewsCount: 112,
    inStock: true
  },
  {
    id: "aviator-cable",
    slug: "aviator-cable",
    name: "Aviator Cable",
    category: "accessories",
    price: 35,
    description: "Premium coiled custom mechanical keyboard cable with a metallic aviator GX16 connector.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDpf1-6g4nO6Mv1edycaM8oMgWEElqQxfyuJ7j654LXZfFhnWTT0KRNa-Jz85IYMLsJSk0-pr2oyC7BA19-8uiQLWgzZl6s2UEd_Ch5WpyU22lGX77K2CjB2nyJP2hEYSgbICUNp7xdYNSe-ZCu-dOo6Q9Rk3n08x3VbJVbOBbXDPzYxgBTWPeK1FkZV16vcAYnW1KmKo5wCgggMeFNsOfBip16v-EEwlabkQeNkDgMbtUmxD8B7n2XojrwX_IcZZa0nJDnZMPGhgQV"],
    specs: [
      { label: "Connector", value: "GX16 5-pin heavy aviator metallic connector" },
      { label: "Cable Length", value: "1.8m flat cable with 15cm coil section" }
    ],
    rating: 4.5,
    reviewsCount: 45,
    inStock: true
  },
  {
    id: "walnut-wrist-rest",
    slug: "walnut-wrist-rest",
    name: "Walnut Wrist Rest",
    category: "accessories",
    price: 55,
    description: "Solid walnut wood keyboard wrist rest with a smooth, oiled finish and subtle ergonomic incline.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBvUVP_kkli29xHmBtUu3nV--79lUTKiK4pqlK07x8J7DuRz2yBzG3bobBUOL8Yr8b9opIQtVF9e37mkrVsizQwteAzb59O14OjrnJADXCyjvOU6k472LRQy4Z4-IdMIdO8fKAc3N7v2SFEkoWWH9D898M62Jkye9WJ9cxs8MpXOEnn1M4LPvxq_DIqof8PjVduZDzVpkjibL3RM1_O2wzY0LKkAcosne5Hopdb0NJyXZ3aqhRZM8JcvGmjRfdIrSsPpdEqPEL2gHt3"],
    specs: [
      { label: "Wood Type", value: "100% solid American Walnut, hand-carved and oiled" },
      { label: "Feet", value: "Anti-slip silicone bumper feet" }
    ],
    rating: 4.8,
    reviewsCount: 130,
    inStock: true
  },
  // Adding more products to reach 25+ across categories to make a solid product collection
  {
    id: "studio-desk-lite",
    slug: "studio-desk-lite",
    name: "Studio Desk Lite",
    category: "desks",
    price: 650,
    description: "A compact workspace table designed for tight urban apartments, featuring premium birch plywood.",
    images: [],
    specs: [
      { label: "Material", value: "Birch plywood core with matte white linoleum laminate top" },
      { label: "Frame", value: "Powder-coated tubular steel legs" },
      { label: "Dimensions", value: "120cm x 60cm x 74cm" }
    ],
    rating: 4.5,
    reviewsCount: 23,
    inStock: true
  },
  {
    id: "axis-rising-desk",
    slug: "axis-rising-desk",
    name: "Axis Rising Desk",
    category: "desks",
    price: 1450,
    description: "Motorized dual-motor sit-stand desk with premium solid oak tabletop and programmable digital controller.",
    images: [],
    specs: [
      { label: "Motor", value: "Dual-motor whisper-silent lift system (< 45dB)" },
      { label: "Height Range", value: "62cm - 128cm (fully height-adjustable)" },
      { label: "Top Material", value: "Solid FSC White Oak (32mm thickness)" }
    ],
    rating: 4.9,
    reviewsCount: 89,
    inStock: true
  },
  {
    id: "contour-stool",
    slug: "contour-stool",
    name: "Contour Ergonomic Stool",
    category: "seating",
    price: 320,
    description: "Active-sitting wobble stool designed to engage your core and improve posture while working at standing desks.",
    images: [],
    specs: [
      { label: "Base", value: "Weighted non-slip rubber dome base for 360-degree tilt" },
      { label: "Cushion", value: "Dense molded memory foam upholstered in charcoal wool" }
    ],
    rating: 4.4,
    reviewsCount: 42,
    inStock: true
  },
  {
    id: "monolith-task-chair",
    slug: "monolith-task-chair",
    name: "Monolith Executive Chair",
    category: "seating",
    price: 1100,
    description: "Premium full-grain black leather executive chair with adaptive synchro-tilt mechanism.",
    images: [],
    specs: [
      { label: "Leather", value: "Fiona series full-grain Italian calfskin leather" },
      { label: "Frame", value: "Die-cast chrome base and support spine" }
    ],
    rating: 4.8,
    reviewsCount: 16,
    inStock: false
  },
  {
    id: "beam-lightbar",
    slug: "beam-lightbar",
    name: "Beam Monitor Lightbar",
    category: "lighting",
    price: 130,
    description: "Monitor-mounted LED light bar designed to eliminate screen glare and illuminate your keyboard workspace.",
    images: [],
    specs: [
      { label: "Clamp", value: "Patented counterweight clamp, fits curved and flat screens" },
      { label: "Sensors", value: "Built-in ambient light sensor for auto-dimming" }
    ],
    rating: 4.7,
    reviewsCount: 198,
    inStock: true
  },
  {
    id: "halo-ring",
    slug: "halo-ring",
    name: "Halo Ambient Ring",
    category: "lighting",
    price: 180,
    description: "Circular desk-standing ambient accent light crafted from seamless polycarbonate, providing halo glow.",
    images: [],
    specs: [
      { label: "Colors", value: "RGBAW spectrum, supports 16 million colors + high CRI white" },
      { label: "Control", value: "Smart-home integrated: Apple Home, Google Home, Alexa" }
    ],
    rating: 4.6,
    reviewsCount: 34,
    inStock: true
  },
  {
    id: "aluminum-monitor-stand",
    slug: "aluminum-monitor-stand",
    name: "Aluminum Monitor Stand",
    category: "accessories",
    price: 75,
    description: "Minimalist monitor riser crafted from a single piece of anodized sandblasted aluminum.",
    images: [],
    specs: [
      { label: "Material", value: "6mm solid billet aluminum, bead-blasted and anodized" },
      { label: "Clearance", value: "Provides 50mm height elevation and storage keyboard cavity underneath" }
    ],
    rating: 4.7,
    reviewsCount: 65,
    inStock: true
  },
  {
    id: "cable-guide",
    slug: "cable-guide",
    name: "Magnetic Cable Guides",
    category: "accessories",
    price: 25,
    description: "Weighted silicone magnetic blocks to anchor your charging cords to the desk edge.",
    images: [],
    specs: [
      { label: "Quantity", value: "Set of 3 magnetic weights + metal adhesive strip" },
      { label: "Material", value: "Weighted steel core wrapped in liquid silicone" }
    ],
    rating: 4.3,
    reviewsCount: 201,
    inStock: true
  },
  {
    id: "walnut-headphone-stand",
    slug: "walnut-headphone-stand",
    name: "Walnut Headphone Stand",
    category: "accessories",
    price: 65,
    description: "Steam-bent walnut plywood cradle on a sandblasted steel base, securing your audio gear.",
    images: [],
    specs: [
      { label: "Wood", value: "Bent walnut veneers with non-marking matte polyurethane finish" },
      { label: "Base", value: "Heavy hot-rolled raw structural steel base with cork dampener" }
    ],
    rating: 4.8,
    reviewsCount: 88,
    inStock: true
  },
  {
    id: "leather-desk-pad",
    slug: "leather-desk-pad",
    name: "Executive Leather Desk Pad",
    category: "accessories",
    price: 120,
    description: "Premium full-grain vegetable-tanned leather desk blotter that patinas beautifully with age.",
    images: [],
    specs: [
      { label: "Leather", value: "Tuscan vegetable-tanned vacchetta leather" },
      { label: "Dimensions", value: "800mm x 450mm x 3.2mm" }
    ],
    rating: 4.9,
    reviewsCount: 39,
    inStock: true
  },
  {
    id: "walnut-monitor-riser",
    slug: "walnut-monitor-riser",
    name: "Walnut Dual-Monitor Riser",
    category: "accessories",
    price: 160,
    description: "Wide desktop shelf raised on steel legs, accommodating two displays and creating storage shelves.",
    images: [],
    specs: [
      { label: "Wood", value: "Solid core American Walnut with matching veneer edges" },
      { label: "Capacity", value: "Supports up to 45kg" },
      { label: "Dimensions", value: "1150mm x 230mm x 110mm" }
    ],
    rating: 4.8,
    reviewsCount: 77,
    inStock: true
  },
  {
    id: "orbit-cable-organizer",
    slug: "orbit-cable-organizer",
    name: "Orbit Under-Desk Cable Tray",
    category: "accessories",
    price: 45,
    description: "Heavy structural steel wire routing tray to be mounted under your desk for power blocks.",
    images: [],
    specs: [
      { label: "Material", value: "Welded carbon steel with matte black finish" },
      { label: "Length", value: "60cm modular tray, mounting screws included" }
    ],
    rating: 4.5,
    reviewsCount: 140,
    inStock: true
  },
  {
    id: "contour-keypad",
    slug: "contour-keypad",
    name: "Contour Wireless Numpad",
    category: "accessories",
    price: 75,
    description: "Match your keyboard setup with a dedicated 21-key layout wireless numpad for finance workflows.",
    images: [],
    specs: [
      { label: "Switches", value: "Elevate Linear Silents (factory lubricated)" },
      { label: "Battery", value: "1000mAh rechargeable via USB-C" }
    ],
    rating: 4.6,
    reviewsCount: 19,
    inStock: true
  }
];
