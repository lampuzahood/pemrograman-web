const products = [{
        name: "SAMSUNG S24 ULTRA",
        price: 40000,
        image: "https://down-tw.img.susercontent.com/file/id-11134207-6ke1k-lr2mkbwwvvt912",
        description: "Skins design motodology untuk Samsung S24 Ultra.",
        type: "phone",
        soldCount: 22
    },
    {
        name: "APPLE 13 EDITION",
        price: 42999,
        image: "https://down-id.img.susercontent.com/file/id-11134207-6ke1k-lq24x606zz2d6a.webp",
        description: "Skins design limited edition untuk iPhone 13.",
        type: "phone",
        soldCount: 137
    },
    {
        name: "XIAOMI POCO F7 PRO",
        price: 40000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m7xog5ss8miz78.webp",
        description: "Skins design gaya NothingPhone untuk Poco F7 Pro.",
        type: "phone",
        soldCount: 138
    },
    {
        name: "XIAOMI REDMI NOTE 14 PRO+ 5G",
        price: 40000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m6wc4cf0vtii01.webp",
        description: "Desain skin stylish ala NothingPhone untuk Redmi Note 14 Pro+.",
        type: "phone",
        soldCount: 14
    },
    {
        name: "APPLE PRO MAX SERIES (12/13/14/15)",
        price: 3800000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lylt49l4bwo0cd.webp",
        description: "Skins design camo premium untuk iPhone Pro Max series.",
        type: "phone",
        soldCount: 16
    },
    {
        name: "XIAOMI POCO F6",
        price: 40000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lxblyi9475t645.webp",
        description: "Skins design NothingPhone untuk Xiaomi Poco F6.",
        type: "phone",
        soldCount: 22
    },
    {
        name: "HOTCIG R233",
        price: 38999,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/12/19/eeba8a49-1486-4a8a-bdca-ba0181c5aa30.jpg",
        description: "Mod vape HOTCIG R233 dengan desain elegan dan performa tinggi.",
        type: "vapor",
        soldCount: 164
    },
    {
        name: "DJI MAVIC 3 PRO",
        price: 135000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lq1kywa4yj7664",
        description: "Drone profesional dengan kamera kualitas tinggi dan stabilisasi luar biasa.",
        type: "drone",
        soldCount: 20
    },
    {
        name: "Canon EOS",
        price: 6700000,
        image: "https://down-id.img.susercontent.com/file/3ca2fa645c8e34d4dbedc6385d55a210@resize_w450_nl.webp",
        description: "Kamera DSLR Canon EOS untuk fotografi profesional.",
        type: "camera",
        soldCount: 144
    },
    {
        name: "INFINIX XPAD",
        price: 52000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lz1mc3rsryzicb@resize_w450_nl.webp",
        description: "Tablet Infinix XPAD ringan dan multifungsi untuk produktivitas harian.",
        type: "tablet",
        soldCount: 135
    },
    {
        name: "Apple Macbook Pro M2 (2023)",
        price: 10500000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lr4bk1sh0fnt3d.webp",
        description: "Laptop Apple MacBook Pro M2 14/16 inci (2023) dengan performa maksimal.",
        type: "laptop",
        soldCount: 191
    },
    {
        name: "APPLE PRO MAX SERIES (12/13/14/15) VARIANT 1",
        price: 3800443,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lylt49l4bwo0cd.webp",
        description: "Skins design camo premium untuk iPhone Pro Max series. (variant 1)",
        type: "phone",
        soldCount: 85
    },
    {
        name: "Apple Macbook Pro M2 (2023) VARIANT 2",
        price: 10501798,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lr4bk1sh0fnt3d.webp",
        description: "Laptop Apple MacBook Pro M2 14/16 inci (2023) dengan performa maksimal. (variant 2)",
        type: "laptop",
        soldCount: 176
    },
    {
        name: "HOTCIG R233 VARIANT 3",
        price: 35448,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/12/19/eeba8a49-1486-4a8a-bdca-ba0181c5aa30.jpg",
        description: "Mod vape HOTCIG R233 dengan desain elegan dan performa tinggi. (variant 3)",
        type: "vapor",
        soldCount: 30
    },
    {
        name: "XIAOMI REDMI NOTE 14 PRO+ 5G VARIANT 4",
        price: 39379,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m6wc4cf0vtii01.webp",
        description: "Desain skin stylish ala NothingPhone untuk Redmi Note 14 Pro+. (variant 4)",
        type: "phone",
        soldCount: 66
    },
    {
        name: "APPLE PRO MAX SERIES (12/13/14/15) VARIANT 5",
        price: 3802247,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lylt49l4bwo0cd.webp",
        description: "Skins design camo premium untuk iPhone Pro Max series. (variant 5)",
        type: "phone",
        soldCount: 47
    },
    {
        name: "XIAOMI POCO F6 VARIANT 6",
        price: 40119,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lxblyi9475t645.webp",
        description: "Skins design NothingPhone untuk Xiaomi Poco F6. (variant 6)",
        type: "phone",
        soldCount: 146
    },
    {
        name: "Canon EOS VARIANT 7",
        price: 6699366,
        image: "https://down-id.img.susercontent.com/file/3ca2fa645c8e34d4dbedc6385d55a210@resize_w450_nl.webp",
        description: "Kamera DSLR Canon EOS untuk fotografi profesional. (variant 7)",
        type: "camera",
        soldCount: 126
    },
    {
        name: "XIAOMI POCO F6 VARIANT 8",
        price: 40108,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lxblyi9475t645.webp",
        description: "Skins design NothingPhone untuk Xiaomi Poco F6. (variant 8)",
        type: "phone",
        soldCount: 19
    },
    {
        name: "Apple Macbook Pro M2 (2023) VARIANT 9",
        price: 10499358,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lr4bk1sh0fnt3d.webp",
        description: "Laptop Apple MacBook Pro M2 14/16 inci (2023) dengan performa maksimal. (variant 9)",
        type: "laptop",
        soldCount: 182
    },
    {
        name: "INFINIX XPAD VARIANT 10",
        price: 49260,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lz1mc3rsryzicb@resize_w450_nl.webp",
        description: "Tablet Infinix XPAD ringan dan multifungsi untuk produktivitas harian. (variant 10)",
        type: "tablet",
        soldCount: 0
    },
    {
        name: "Canon EOS VARIANT 11",
        price: 6696342,
        image: "https://down-id.img.susercontent.com/file/3ca2fa645c8e34d4dbedc6385d55a210@resize_w450_nl.webp",
        description: "Kamera DSLR Canon EOS untuk fotografi profesional. (variant 11)",
        type: "camera",
        soldCount: 150
    },
    {
        name: "Apple Macbook Pro M2 (2023) VARIANT 12",
        price: 10504117,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lr4bk1sh0fnt3d.webp",
        description: "Laptop Apple MacBook Pro M2 14/16 inci (2023) dengan performa maksimal. (variant 12)",
        type: "laptop",
        soldCount: 10
    },
    {
        name: "Canon EOS VARIANT 13",
        price: 6697689,
        image: "https://down-id.img.susercontent.com/file/3ca2fa645c8e34d4dbedc6385d55a210@resize_w450_nl.webp",
        description: "Kamera DSLR Canon EOS untuk fotografi profesional. (variant 13)",
        type: "camera",
        soldCount: 130
    },
    {
        name: "HOTCIG R233 VARIANT 14",
        price: 38659,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/12/19/eeba8a49-1486-4a8a-bdca-ba0181c5aa30.jpg",
        description: "Mod vape HOTCIG R233 dengan desain elegan dan performa tinggi. (variant 14)",
        type: "vapor",
        soldCount: 39
    },
    {
        name: "XIAOMI POCO F6 VARIANT 15",
        price: 39385,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lxblyi9475t645.webp",
        description: "Skins design NothingPhone untuk Xiaomi Poco F6. (variant 15)",
        type: "phone",
        soldCount: 79
    },
    {
        name: "INFINIX XPAD VARIANT 16",
        price: 49276,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lz1mc3rsryzicb@resize_w450_nl.webp",
        description: "Tablet Infinix XPAD ringan dan multifungsi untuk produktivitas harian. (variant 16)",
        type: "tablet",
        soldCount: 160
    },
    {
        name: "DJI MAVIC 3 PRO VARIANT 17",
        price: 131831,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lq1kywa4yj7664",
        description: "Drone profesional dengan kamera kualitas tinggi dan stabilisasi luar biasa. (variant 17)",
        type: "drone",
        soldCount: 28
    },
    {
        name: "APPLE PRO MAX SERIES (12/13/14/15) VARIANT 18",
        price: 3796669,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lylt49l4bwo0cd.webp",
        description: "Skins design camo premium untuk iPhone Pro Max series. (variant 18)",
        type: "phone",
        soldCount: 140
    },
    {
      name: "VAPE AETHER X200",
      price: 520000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-vape1.webp",
      description: "Vape mod premium dengan desain elegan dan performa tinggi untuk pengguna profesional.",
      type: "vape",
      soldCount: 87
    },
    {
      name: "VAPE NANO FLARE",
      price: 389000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-vape2.webp",
      description: "Desain ringan, cocok untuk pemula yang ingin menikmati pengalaman vaping yang halus.",
      type: "vape",
      soldCount: 145
    },
    {
      name: "VAPE STORM BOLT",
      price: 610000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-vape3.webp",
      description: "Vape kuat dengan baterai tahan lama dan rasa uap yang kaya. Cocok untuk heavy user.",
      type: "vape",
      soldCount: 192
    },  {
    name: "GALAXY TAB S9 ULTRA",
    price: 14200000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab1.webp",
    description: "Tablet flagship Samsung dengan layar besar dan dukungan stylus S-Pen.",
    type: "tab",
    soldCount: 123
  },
  {
    name: "iPAD PRO 12.9 2023",
    price: 18999000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab2.webp",
    description: "iPad Pro terbaru dengan chip M2 dan Liquid Retina XDR display.",
    type: "tab",
    soldCount: 178
  },
  {
    name: "LENOVO TAB M10 HD",
    price: 2899000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab3.webp",
    description: "Tablet Android terjangkau dengan layar HD dan speaker stereo.",
    type: "tab",
    soldCount: 54
  },
  {
    name: "HUAWEI MATEPAD 11",
    price: 6399000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab4.webp",
    description: "Tablet produktivitas dengan HarmonyOS dan stylus M-Pencil.",
    type: "tab",
    soldCount: 99
  },
  {
    name: "XIAOMI PAD 6",
    price: 5299000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab5.webp",
    description: "Tablet powerful untuk hiburan dan multitasking harian.",
    type: "tab",
    soldCount: 64
  },
  {
    name: "OPPO PAD AIR",
    price: 3499000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-tab6.webp",
    description: "Tablet tipis dan ringan dari OPPO dengan desain premium.",
    type: "tab",
    soldCount: 42
  }
];
