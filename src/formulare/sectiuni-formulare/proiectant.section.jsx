import React from "react";
import Input from "../../components/inputs/input.component";
import TextLineTrough from "../../components/linetrough-text/text-linetrough.component";
import Section from "../../components/section/section.component";
import COLORS from "../../theme/colors";

const SectiuneProiectant = () => {
  return (
    <Section color={COLORS.orange}>
      <p className="indent">
        {`Documentaţia tehnică ⎯ D.T. pentru autorizarea executării lucrărilor de construire (D.T.A.C.+D.T.O.E.), respectiv de desfiinţare a construcţiilor (D.T.A.D.)`}
        {` nr.`}
        <Input id="nr-proiect" name="nr-proiect" style={{ width: "197px" }} />
        {` din`}
        <Input
          id="data-proiect"
          name="data-proiect"
          style={{ width: "250px" }}
        />
        <Input
          id="denumire-documentatie"
          name="denumire-documentatie"
          style={{ width: "98.5%" }}
        />
        <span
          style={{
            fontSize: "8pt",
            display: "inline-block",
            textAlign: "center",
            width: "100%",
          }}
        >{`[denumirea documentației]`}</span>
      </p>
      <p>
        a fost elaborată de
        <Input
          id="denumire-firma"
          name="denumire-firma"
          style={{ width: "270px" }}
          rememberdata="true"
        />
        , cu sediul în județul
        <Input
          id="judet-firma"
          name="judet-firma"
          style={{ width: "200px" }}
          rememberdata="true"
        />
        ,
        <TextLineTrough words={[" municipiul/", "orașul/", "comuna "]} />
        <Input
          id="localitate-firma"
          name="localitate-firma"
          style={{ width: "296px" }}
          rememberdata="true"
        />
        ,
        <TextLineTrough words={[" sector/", "satul "]} />
        <Input
          id="sector-sat-firma"
          name="sector-sat-firma"
          size="255px"
          rememberdata="true"
        />
        , cod poștal
        <Input
          className="centrat"
          id="cp-firma"
          name="cp-firma"
          style={{ width: "50px" }}
          rememberdata="true"
        />
        , str.
        <Input
          className="centrat"
          id="str-firma"
          name="str-firma"
          style={{ width: "256px" }}
          rememberdata="true"
        />
        , nr.
        <Input
          className="centrat"
          id="nr-firma"
          name="nr-firma"
          style={{ width: "40px" }}
          rememberdata="true"
        />
        , bl.
        <Input
          className="centrat"
          id="bloc-firma"
          name="bloc-firma"
          style={{ width: "30px" }}
          rememberdata="true"
        />
        , sc.
        <Input
          className="centrat"
          id="scara-firma"
          name="scara-firma"
          style={{ width: "30px" }}
          rememberdata="true"
        />
        , et.
        <Input
          className="centrat"
          id="etaj-firma"
          name="etaj-firma"
          style={{ width: "30px" }}
          rememberdata="true"
        />
        , ap.
        <Input
          className="centrat"
          id="ap-firma"
          name="ap-firma"
          style={{ width: "30px" }}
          rememberdata="true"
        />
        , respectiv de:
        <Input
          className="centrat"
          id="nume-proiectant"
          name="nume-proiectant"
          style={{ width: "438px" }}
          rememberdata="true"
        />
        , arhitect cu drept de semnătură, înscris în Tabloul Național al
        Arhitecților cu nr.
        <Input
          className="centrat"
          id="nr-tna"
          name="nr-tna"
          style={{ width: "300px" }}
          rememberdata="true"
        />
        , în conformitate cu prevederile Legii nr. 184/2001 privind organizarea
        şi exercitarea profesiei de arhitect, republicată, aflat în evidenţa
        Filialei teritoriale
        <Input
          className="centrat"
          id="filiala-oar-proiectant"
          name="filiala-oar-proiectant"
          style={{ width: "300px" }}
          rememberdata="true"
        />
        a Ordinului Arhitecților din România.
      </p>
    </Section>
  );
};

export default SectiuneProiectant;
