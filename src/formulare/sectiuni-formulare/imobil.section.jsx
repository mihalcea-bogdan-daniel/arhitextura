import React from "react";
import Input from "../../components/inputs/input.component";
import TextLineTrough from "../../components/linetrough-text/text-linetrough.component";
import Section from "../../components/section/section.component";
import COLORS from "../../theme/colors";
const SectiuneImobil = () => {
  return (
    <Section color={COLORS.blue}>
      <p className="indent">
        în conformitate cu prevederile Legii nr.50/1991, privind autorizarea
        executării lucrărilor de construcţii, republicată, cu modificările şi
        completările ulterioare, solicit emiterea autorizaţiei de
        <TextLineTrough words={[" construire/", "desființare"]} />
      </p>
      <p className="indent">
        pentru imobilul ⎯ teren şi/sau construcţii ⎯, situat în judeţul
        <Input
          id="judet-imobil"
          name="judet-imobil"
          style={{ width: "317px" }}
        />
        ,
        <TextLineTrough words={[" municipiul/", "orașul/", "comuna "]} />
        <Input
          id="localitate-imobil"
          name="localitate-imobil"
          style={{ width: "256px" }}
        />
        , satul
        <Input id="sat-imobil" name="sat-imobil" size="205px" />, sectorul
        <Input
          className="centrat"
          id="sector-imobil"
          name="sector-imobil"
          style={{ width: "20px" }}
        />
        , cod poștal
        <Input
          className="centrat"
          id="cp-imobil"
          name="cp-imobil"
          style={{ width: "50px" }}
        />
        , str.
        <Input
          className="centrat"
          id="str-imobil"
          name="str-imobil"
          style={{ width: "256px" }}
        />
        , nr.
        <Input
          className="centrat"
          id="nr-imobil"
          name="nr-imobil"
          style={{ width: "40px" }}
        />
        , bl.
        <Input
          className="centrat"
          id="bloc-imobil"
          name="bloc-imobil"
          style={{ width: "30px" }}
        />
        , sc.
        <Input
          className="centrat"
          id="scara-imobil"
          name="scara-imobil"
          style={{ width: "30px" }}
        />
        , et.
        <Input
          className="centrat"
          id="etaj-imobil"
          name="etaj-imobil"
          style={{ width: "30px" }}
        />
        , ap.
        <Input
          className="centrat"
          id="ap-imobil"
          name="ap-imobil"
          style={{ width: "30px" }}
        />
        ,
      </p>
      <p className="lista-identificare-teren">
        <li>
          Cartea funciară{" "}
          <Input id="cf-imobil" name="cf-imobil" style={{ width: "300px" }} />,{" "}
        </li>
        <li>
          Fișa bunului imobil{" "}
          <Input id="fb-imobil" name="fb-imobil" style={{ width: "280px" }} />,{" "}
        </li>
        <li>
          sau nr. cadastral{" "}
          <Input id="nc-imobil" name="nc-imobil" style={{ width: "292px" }} />,{" "}
        </li>
      </p>
      <p className="indent">
        <li>În vederea executării lucrărilor de : </li>
        <Input
          className="centrat"
          id="titlu-proiect"
          name="titlu-proiect"
          style={{ width: "98%", marginBottom: "5px" }}
        />
        <li>
          În valoare de :{" "}
          <Input
            id="valoare-imobil"
            name="valoare-imobil"
            style={{ width: "543px" }}
            suffix="RON"
          />
        </li>
      </p>
    </Section>
  );
};

export default SectiuneImobil;
