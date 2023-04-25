const countries = [
    { Country: "Niue", Slug: "niue", ISO2: "NU" },
    { Country: "San Marino", Slug: "san-marino", ISO2: "SM" },
    {
        Country: "Hong Kong, SAR China",
        Slug: "hong-kong-sar-china",
        ISO2: "HK",
    },
    { Country: "Italy", Slug: "italy", ISO2: "IT" },
    { Country: "Nauru", Slug: "nauru", ISO2: "NR" },
    { Country: "Pitcairn", Slug: "pitcairn", ISO2: "PN" },
    { Country: "Serbia", Slug: "serbia", ISO2: "RS" },
    { Country: "Jordan", Slug: "jordan", ISO2: "JO" },
    { Country: "Mauritania", Slug: "mauritania", ISO2: "MR" },
    { Country: "India", Slug: "india", ISO2: "IN" },
    { Country: "Morocco", Slug: "morocco", ISO2: "MA" },
    { Country: "Papua New Guinea", Slug: "papua-new-guinea", ISO2: "PG" },
    { Country: "Brazil", Slug: "brazil", ISO2: "BR" },
    { Country: "Brunei Darussalam", Slug: "brunei", ISO2: "BN" },
    { Country: "Equatorial Guinea", Slug: "equatorial-guinea", ISO2: "GQ" },
    { Country: "Egypt", Slug: "egypt", ISO2: "EG" },
    { Country: "Paraguay", Slug: "paraguay", ISO2: "PY" },
    { Country: "Saint Helena", Slug: "saint-helena", ISO2: "SH" },
    { Country: "Ukraine", Slug: "ukraine", ISO2: "UA" },
    { Country: "Cambodia", Slug: "cambodia", ISO2: "KH" },
    { Country: "Chad", Slug: "chad", ISO2: "TD" },
    { Country: "Jersey", Slug: "jersey", ISO2: "JE" },
    { Country: "Isle of Man", Slug: "isle-of-man", ISO2: "IM" },
    { Country: "Timor-Leste", Slug: "timor-leste", ISO2: "TL" },
    { Country: "Ghana", Slug: "ghana", ISO2: "GH" },
    { Country: "Virgin Islands, US", Slug: "virgin-islands", ISO2: "VI" },
    { Country: "Trinidad and Tobago", Slug: "trinidad-and-tobago", ISO2: "TT" },
    { Country: "Belgium", Slug: "belgium", ISO2: "BE" },
    { Country: "Denmark", Slug: "denmark", ISO2: "DK" },
    { Country: "Gabon", Slug: "gabon", ISO2: "GA" },
    { Country: "Barbados", Slug: "barbados", ISO2: "BB" },
    {
        Country: "Falkland Islands (Malvinas)",
        Slug: "falkland-islands-malvinas",
        ISO2: "FK",
    },
    { Country: "Peru", Slug: "peru", ISO2: "PE" },
    { Country: "French Guiana", Slug: "french-guiana", ISO2: "GF" },
    { Country: "Gibraltar", Slug: "gibraltar", ISO2: "GI" },
    { Country: "Kuwait", Slug: "kuwait", ISO2: "KW" },
    { Country: "Latvia", Slug: "latvia", ISO2: "LV" },
    { Country: "Portugal", Slug: "portugal", ISO2: "PT" },
    { Country: "American Samoa", Slug: "american-samoa", ISO2: "AS" },
    { Country: "Saudi Arabia", Slug: "saudi-arabia", ISO2: "SA" },
    { Country: "Malaysia", Slug: "malaysia", ISO2: "MY" },
    { Country: "Guernsey", Slug: "guernsey", ISO2: "GG" },
    { Country: "Indonesia", Slug: "indonesia", ISO2: "ID" },
    { Country: "Kiribati", Slug: "kiribati", ISO2: "KI" },
    {
        Country: "Bosnia and Herzegovina",
        Slug: "bosnia-and-herzegovina",
        ISO2: "BA",
    },
    { Country: "Fiji", Slug: "fiji", ISO2: "FJ" },
    { Country: "Kenya", Slug: "kenya", ISO2: "KE" },
    { Country: "Korea (North)", Slug: "korea-north", ISO2: "KP" },
    {
        Country: "Sao Tome and Principe",
        Slug: "sao-tome-and-principe",
        ISO2: "ST",
    },
    { Country: "Uruguay", Slug: "uruguay", ISO2: "UY" },
    { Country: "Ecuador", Slug: "ecuador", ISO2: "EC" },
    { Country: "Georgia", Slug: "georgia", ISO2: "GE" },
    { Country: "Marshall Islands", Slug: "marshall-islands", ISO2: "MH" },
    { Country: "Myanmar", Slug: "myanmar", ISO2: "MM" },
    { Country: "Poland", Slug: "poland", ISO2: "PL" },
    { Country: "Aruba", Slug: "aruba", ISO2: "AW" },
    { Country: "Belize", Slug: "belize", ISO2: "BZ" },
    { Country: "Cyprus", Slug: "cyprus", ISO2: "CY" },
    { Country: "Sweden", Slug: "sweden", ISO2: "SE" },
    {
        Country: "Northern Mariana Islands",
        Slug: "northern-mariana-islands",
        ISO2: "MP",
    },
    { Country: "Liechtenstein", Slug: "liechtenstein", ISO2: "LI" },
    { Country: "Malawi", Slug: "malawi", ISO2: "MW" },
    { Country: "Uzbekistan", Slug: "uzbekistan", ISO2: "UZ" },
    { Country: "Antarctica", Slug: "antarctica", ISO2: "AQ" },
    { Country: "Côte d'Ivoire", Slug: "cote-divoire", ISO2: "CI" },
    { Country: "Nigeria", Slug: "nigeria", ISO2: "NG" },
    { Country: "Gambia", Slug: "gambia", ISO2: "GM" },
    { Country: "Iraq", Slug: "iraq", ISO2: "IQ" },
    { Country: "Eritrea", Slug: "eritrea", ISO2: "ER" },
    { Country: "Guatemala", Slug: "guatemala", ISO2: "GT" },
    { Country: "Puerto Rico", Slug: "puerto-rico", ISO2: "PR" },
    {
        Country: "Saint Pierre and Miquelon",
        Slug: "saint-pierre-and-miquelon",
        ISO2: "PM",
    },
    { Country: "Turkey", Slug: "turkey", ISO2: "TR" },
    { Country: "Algeria", Slug: "algeria", ISO2: "DZ" },
    { Country: "Burkina Faso", Slug: "burkina-faso", ISO2: "BF" },
    { Country: "Niger", Slug: "niger", ISO2: "NE" },
    { Country: "Saint-Barthélemy", Slug: "saint-barthélemy", ISO2: "BL" },
    {
        Country: "Wallis and Futuna Islands",
        Slug: "wallis-and-futuna-islands",
        ISO2: "WF",
    },
    { Country: "Belarus", Slug: "belarus", ISO2: "BY" },
    { Country: "Jamaica", Slug: "jamaica", ISO2: "JM" },
    { Country: "Montenegro", Slug: "montenegro", ISO2: "ME" },
    { Country: "Monaco", Slug: "monaco", ISO2: "MC" },
    { Country: "Nepal", Slug: "nepal", ISO2: "NP" },
    { Country: "Guinea-Bissau", Slug: "guinea-bissau", ISO2: "GW" },
    { Country: "Mexico", Slug: "mexico", ISO2: "MX" },
    { Country: "Angola", Slug: "angola", ISO2: "AO" },
    { Country: "Bahrain", Slug: "bahrain", ISO2: "BH" },
    { Country: "Libya", Slug: "libya", ISO2: "LY" },
    { Country: "Lithuania", Slug: "lithuania", ISO2: "LT" },
    { Country: "Mauritius", Slug: "mauritius", ISO2: "MU" },
    { Country: "Moldova", Slug: "moldova", ISO2: "MD" },
    { Country: "Samoa", Slug: "samoa", ISO2: "WS" },
    { Country: "Ireland", Slug: "ireland", ISO2: "IE" },
    { Country: "Slovakia", Slug: "slovakia", ISO2: "SK" },
    { Country: "Switzerland", Slug: "switzerland", ISO2: "CH" },
    { Country: "Luxembourg", Slug: "luxembourg", ISO2: "LU" },
    { Country: "Zimbabwe", Slug: "zimbabwe", ISO2: "ZW" },
    { Country: "Antigua and Barbuda", Slug: "antigua-and-barbuda", ISO2: "AG" },
    { Country: "Cameroon", Slug: "cameroon", ISO2: "CM" },
    {
        Country: "French Southern Territories",
        Slug: "french-southern-territories",
        ISO2: "TF",
    },
    {
        Country: "British Virgin Islands",
        Slug: "british-virgin-islands",
        ISO2: "VG",
    },
    { Country: "Liberia", Slug: "liberia", ISO2: "LR" },
    { Country: "Guinea", Slug: "guinea", ISO2: "GN" },
    {
        Country: "Saint Vincent and Grenadines",
        Slug: "saint-vincent-and-the-grenadines",
        ISO2: "VC",
    },
    { Country: "United Kingdom", Slug: "united-kingdom", ISO2: "GB" },
    {
        Country: "Venezuela (Bolivarian Republic)",
        Slug: "venezuela",
        ISO2: "VE",
    },
    { Country: "Australia", Slug: "australia", ISO2: "AU" },
    { Country: "Lebanon", Slug: "lebanon", ISO2: "LB" },
    { Country: "Seychelles", Slug: "seychelles", ISO2: "SC" },
    { Country: "Palau", Slug: "palau", ISO2: "PW" },
    { Country: "Yemen", Slug: "yemen", ISO2: "YE" },
    { Country: "Bermuda", Slug: "bermuda", ISO2: "BM" },
    { Country: "Botswana", Slug: "botswana", ISO2: "BW" },
    { Country: "Kyrgyzstan", Slug: "kyrgyzstan", ISO2: "KG" },
    { Country: "Christmas Island", Slug: "christmas-island", ISO2: "CX" },
    { Country: "Mongolia", Slug: "mongolia", ISO2: "MN" },
    { Country: "Qatar", Slug: "qatar", ISO2: "QA" },
    { Country: "South Sudan", Slug: "south-sudan", ISO2: "SS" },
    { Country: "Guam", Slug: "guam", ISO2: "GU" },
    { Country: "Hungary", Slug: "hungary", ISO2: "HU" },
    { Country: "Thailand", Slug: "thailand", ISO2: "TH" },
    { Country: "Uganda", Slug: "uganda", ISO2: "UG" },
    { Country: "Guadeloupe", Slug: "guadeloupe", ISO2: "GP" },
    { Country: "Norfolk Island", Slug: "norfolk-island", ISO2: "NF" },
    { Country: "Panama", Slug: "panama", ISO2: "PA" },
    { Country: "Palestinian Territory", Slug: "palestine", ISO2: "PS" },
    { Country: "Greece", Slug: "greece", ISO2: "GR" },
    { Country: "Korea (South)", Slug: "korea-south", ISO2: "KR" },
    { Country: "Mozambique", Slug: "mozambique", ISO2: "MZ" },
    {
        Country: "British Indian Ocean Territory",
        Slug: "british-indian-ocean-territory",
        ISO2: "IO",
    },
    { Country: "France", Slug: "france", ISO2: "FR" },
    {
        Country: "Saint Kitts and Nevis",
        Slug: "saint-kitts-and-nevis",
        ISO2: "KN",
    },
    { Country: "Saint Lucia", Slug: "saint-lucia", ISO2: "LC" },
    { Country: "Suriname", Slug: "suriname", ISO2: "SR" },
    { Country: "ALA Aland Islands", Slug: "ala-aland-islands", ISO2: "AX" },
    { Country: "Argentina", Slug: "argentina", ISO2: "AR" },
    { Country: "Togo", Slug: "togo", ISO2: "TG" },
    { Country: "Maldives", Slug: "maldives", ISO2: "MV" },
    { Country: "Taiwan, Republic of China", Slug: "taiwan", ISO2: "TW" },
    { Country: "Dominica", Slug: "dominica", ISO2: "DM" },
    { Country: "Lesotho", Slug: "lesotho", ISO2: "LS" },
    { Country: "Norway", Slug: "norway", ISO2: "NO" },
    { Country: "Tokelau", Slug: "tokelau", ISO2: "TK" },
    {
        Country: "US Minor Outlying Islands",
        Slug: "us-minor-outlying-islands",
        ISO2: "UM",
    },
    { Country: "Azerbaijan", Slug: "azerbaijan", ISO2: "AZ" },
    { Country: "Cuba", Slug: "cuba", ISO2: "CU" },
    { Country: "Honduras", Slug: "honduras", ISO2: "HN" },
    { Country: "Mali", Slug: "mali", ISO2: "ML" },
    { Country: "Andorra", Slug: "andorra", ISO2: "AD" },
    { Country: "Bulgaria", Slug: "bulgaria", ISO2: "BG" },
    { Country: "Comoros", Slug: "comoros", ISO2: "KM" },
    { Country: "Sierra Leone", Slug: "sierra-leone", ISO2: "SL" },
    { Country: "Tunisia", Slug: "tunisia", ISO2: "TN" },
    { Country: "Iran, Islamic Republic of", Slug: "iran", ISO2: "IR" },
    { Country: "Macao, SAR China", Slug: "macao-sar-china", ISO2: "MO" },
    { Country: "Montserrat", Slug: "montserrat", ISO2: "MS" },
    { Country: "Pakistan", Slug: "pakistan", ISO2: "PK" },
    { Country: "Macedonia, Republic of", Slug: "macedonia", ISO2: "MK" },
    { Country: "Malta", Slug: "malta", ISO2: "MT" },
    { Country: "Namibia", Slug: "namibia", ISO2: "NA" },
    { Country: "Solomon Islands", Slug: "solomon-islands", ISO2: "SB" },
    { Country: "Zambia", Slug: "zambia", ISO2: "ZM" },
    { Country: "Finland", Slug: "finland", ISO2: "FI" },
    { Country: "Japan", Slug: "japan", ISO2: "JP" },
    { Country: "Cayman Islands", Slug: "cayman-islands", ISO2: "KY" },
    { Country: "Congo (Brazzaville)", Slug: "congo-brazzaville", ISO2: "CG" },
    { Country: "Senegal", Slug: "senegal", ISO2: "SN" },
    { Country: "Canada", Slug: "canada", ISO2: "CA" },
    { Country: "Chile", Slug: "chile", ISO2: "CL" },
    { Country: "Grenada", Slug: "grenada", ISO2: "GD" },
    { Country: "Slovenia", Slug: "slovenia", ISO2: "SI" },
    { Country: "Dominican Republic", Slug: "dominican-republic", ISO2: "DO" },
    { Country: "Nicaragua", Slug: "nicaragua", ISO2: "NI" },
    { Country: "Republic of Kosovo", Slug: "kosovo", ISO2: "XK" },
    { Country: "Benin", Slug: "benin", ISO2: "BJ" },
    { Country: "Burundi", Slug: "burundi", ISO2: "BI" },
    { Country: "Mayotte", Slug: "mayotte", ISO2: "YT" },
    { Country: "Sri Lanka", Slug: "sri-lanka", ISO2: "LK" },
    { Country: "Swaziland", Slug: "swaziland", ISO2: "SZ" },
    { Country: "Armenia", Slug: "armenia", ISO2: "AM" },
    { Country: "Colombia", Slug: "colombia", ISO2: "CO" },
    { Country: "Congo (Kinshasa)", Slug: "congo-kinshasa", ISO2: "CD" },
    { Country: "Estonia", Slug: "estonia", ISO2: "EE" },
    { Country: "Bangladesh", Slug: "bangladesh", ISO2: "BD" },
    { Country: "Singapore", Slug: "singapore", ISO2: "SG" },
    { Country: "South Africa", Slug: "south-africa", ISO2: "ZA" },
    { Country: "Tuvalu", Slug: "tuvalu", ISO2: "TV" },
    { Country: "Bouvet Island", Slug: "bouvet-island", ISO2: "BV" },
    { Country: "French Polynesia", Slug: "french-polynesia", ISO2: "PF" },
    {
        Country: "Heard and Mcdonald Islands",
        Slug: "heard-and-mcdonald-islands",
        ISO2: "HM",
    },
    { Country: "Kazakhstan", Slug: "kazakhstan", ISO2: "KZ" },
    { Country: "Anguilla", Slug: "anguilla", ISO2: "AI" },
    { Country: "Czech Republic", Slug: "czech-republic", ISO2: "CZ" },
    { Country: "Germany", Slug: "germany", ISO2: "DE" },
    {
        Country: "Svalbard and Jan Mayen Islands",
        Slug: "svalbard-and-jan-mayen-islands",
        ISO2: "SJ",
    },
    { Country: "Martinique", Slug: "martinique", ISO2: "MQ" },
    { Country: "Spain", Slug: "spain", ISO2: "ES" },
    { Country: "United States of America", Slug: "united-states", ISO2: "US" },
    { Country: "Bolivia", Slug: "bolivia", ISO2: "BO" },
    { Country: "Somalia", Slug: "somalia", ISO2: "SO" },
    { Country: "Rwanda", Slug: "rwanda", ISO2: "RW" },
    {
        Country: "Saint-Martin (French part)",
        Slug: "saint-martin-french-part",
        ISO2: "MF",
    },
    { Country: "Cook Islands", Slug: "cook-islands", ISO2: "CK" },
    { Country: "Croatia", Slug: "croatia", ISO2: "HR" },
    { Country: "China", Slug: "china", ISO2: "CN" },
    { Country: "Ethiopia", Slug: "ethiopia", ISO2: "ET" },
    { Country: "Faroe Islands", Slug: "faroe-islands", ISO2: "FO" },
    { Country: "Iceland", Slug: "iceland", ISO2: "IS" },
    { Country: "Bhutan", Slug: "bhutan", ISO2: "BT" },
    { Country: "El Salvador", Slug: "el-salvador", ISO2: "SV" },
    { Country: "Netherlands", Slug: "netherlands", ISO2: "NL" },
    { Country: "Syrian Arab Republic (Syria)", Slug: "syria", ISO2: "SY" },
    { Country: "Tanzania, United Republic of", Slug: "tanzania", ISO2: "TZ" },
    {
        Country: "Central African Republic",
        Slug: "central-african-republic",
        ISO2: "CF",
    },
    { Country: "Haiti", Slug: "haiti", ISO2: "HT" },
    { Country: "New Caledonia", Slug: "new-caledonia", ISO2: "NC" },
    { Country: "Vanuatu", Slug: "vanuatu", ISO2: "VU" },
    { Country: "Afghanistan", Slug: "afghanistan", ISO2: "AF" },
    { Country: "New Zealand", Slug: "new-zealand", ISO2: "NZ" },
    { Country: "Tajikistan", Slug: "tajikistan", ISO2: "TJ" },
    { Country: "Tonga", Slug: "tonga", ISO2: "TO" },
    { Country: "Turkmenistan", Slug: "turkmenistan", ISO2: "TM" },
    { Country: "Madagascar", Slug: "madagascar", ISO2: "MG" },
    {
        Country: "Micronesia, Federated States of",
        Slug: "micronesia",
        ISO2: "FM",
    },
    { Country: "Israel", Slug: "israel", ISO2: "IL" },
    { Country: "Lao PDR", Slug: "lao-pdr", ISO2: "LA" },
    { Country: "Russian Federation", Slug: "russia", ISO2: "RU" },
    { Country: "Albania", Slug: "albania", ISO2: "AL" },
    { Country: "Bahamas", Slug: "bahamas", ISO2: "BS" },
    { Country: "Djibouti", Slug: "djibouti", ISO2: "DJ" },
    { Country: "Greenland", Slug: "greenland", ISO2: "GL" },
    {
        Country: "Holy See (Vatican City State)",
        Slug: "holy-see-vatican-city-state",
        ISO2: "VA",
    },
    { Country: "Sudan", Slug: "sudan", ISO2: "SD" },
    {
        Country: "Cocos (Keeling) Islands",
        Slug: "cocos-keeling-islands",
        ISO2: "CC",
    },
    { Country: "Costa Rica", Slug: "costa-rica", ISO2: "CR" },
    { Country: "Oman", Slug: "oman", ISO2: "OM" },
    { Country: "Romania", Slug: "romania", ISO2: "RO" },
    {
        Country: "United Arab Emirates",
        Slug: "united-arab-emirates",
        ISO2: "AE",
    },
    { Country: "Viet Nam", Slug: "vietnam", ISO2: "VN" },
    { Country: "Western Sahara", Slug: "western-sahara", ISO2: "EH" },
    { Country: "Austria", Slug: "austria", ISO2: "AT" },
    { Country: "Cape Verde", Slug: "cape-verde", ISO2: "CV" },
    {
        Country: "Netherlands Antilles",
        Slug: "netherlands-antilles",
        ISO2: "AN",
    },
    { Country: "Guyana", Slug: "guyana", ISO2: "GY" },
    { Country: "Réunion", Slug: "réunion", ISO2: "RE" },
    {
        Country: "Turks and Caicos Islands",
        Slug: "turks-and-caicos-islands",
        ISO2: "TC",
    },
    { Country: "Philippines", Slug: "philippines", ISO2: "PH" },
    {
        Country: "South Georgia and the South Sandwich Islands",
        Slug: "south-georgia-and-the-south-sandwich-islands",
        ISO2: "GS",
    },
];

export const countryNames = countries.map((country) => country.Country).sort();
