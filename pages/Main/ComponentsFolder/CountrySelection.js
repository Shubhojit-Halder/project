import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PublicIcon from '@mui/icons-material/Public';
import signUpModule2 from '../../../styles/loginSignup/signup2.module.css';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = [
  "Andorra (AD)",
  "Argentina (AR)",
  "American Samoa (AS)",
  "Austria (AT)",
  "Australia (AU)",
  " Åland Islands (AX)",
  "Bangladesh (BD)",
  " Belgium (BE)",
  "Bulgaria (BG)",
  "Bermuda (BM)",
  "Brazil (BR)",
  "Belarus (BY)",
  "Canada (CA)",
  "Switzerland (CH)",
  "Colombia (CO)",
  "Costa Rica (CR)",
  "Czechia (CZ)",
  "Germany (DE)",
  "Denmark (DK)",
  "Dominican Republic (DO)",
  "Algeria (DZ)",
  "Spain (ES)",
  " Finland (FI)",
  "Faroe Islands (FO)",
  "France (FR)",
  "United Kingdom of Great Britain and Northern Ireland (GB)",
  "French Guiana (GF)",
  "Guernsey (GG)",
  "Greenland (GL)",
  "Guadeloupe (GP)",
  " Guatemala (GT)",
  "Guam (GU)",
  "Croatia (HR)",
  "Hungary (HU)",
  "Ireland (IE)",
  "Isle of Man (IM)",
  "India (IN)",
  "Iceland (IS)",
  " Italy (IT)",
  " Jersey (JE)",
  "Japan (JP)",
  " Liechtenstein (LI)",
  " Sri Lanka (LK)",
  "Lithuania (LT)",
  "Luxembourg (LU)",
  "Latvia (LV)",
  "Monaco (MC)",
  "Republic of Moldova (MD)",
  "Marshall Islands (MH)",
  "The former Yugoslav Republic of Macedonia (MK)",
  "Northern Mariana Islands (MP)",
  "Martinique (MQ)",
  "Malta (MT)",
  "Mexico (MX)",
  "Malaysia (MY)",
  "New Caledonia (NC)",
  "Netherlands (NL)",
  "Norway (NO)",
  "New Zealand (NZ)",
  "Philippines (PH)",
  "Pakistan (PK)",
  "Poland (PL)",
  "Saint Pierre and Miquelon (PM)",
  "Puerto Rico (PR)",
  "Portugal (PT)",
  "Réunion (RE)",
  "Romania (RO)",
  "Russian Federation (RU)",
  "Sweden (SE)",
  "Slovenia (SI)",
  "Svalbard and Jan Mayen Islands (SJ)",
  "Slovakia (SK)",
  "San Marino (SM)",
  "Thailand (TH)",
  "Turkey (TR)",
  "Ukraine (UA)",
  "United States of America (US)",
  "Uruguay (UY)",
  "Holy See (VA)",
  "United States Virgin Islands (VI)",
  "Wallis and Futuna Islands (WF)",
  "Mayotte (YT)",
  "South Africa (ZA)",
];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function CountrySelect() {
  const theme = useTheme();
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
    // console.log(country);
  };
  return (
    <div className={signUpModule2.countryDiv}>
      <PublicIcon
        className={signUpModule2.passwordIcon}
        sx={{ mr: 2, my: 2 }}
      />

      <FormControl sx={{ width: 220 }}>
        <InputLabel id="demo-multiple-name-label">Country</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //   multiple
          value={country}
          onChange={handleChange}
          input={<OutlinedInput label="Country" />}
          MenuProps={MenuProps}
        >
          {countries.map((country) => (
            <MenuItem
              key={country}
              value={country}
              //   style={getStyles(country, personcountry, theme)}
            >
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
