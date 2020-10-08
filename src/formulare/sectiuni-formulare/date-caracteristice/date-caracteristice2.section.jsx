import React from "react";
import Section from "../../../components/section/section.component";
import Input from "../../../components/inputs/input.component";
import Grid from "../../../components/grid-container/grid-container.component";
import CheckBox from "../../../components/checkbox/checkbox.component";
import List from "../../../components/list-component/list.component";
import COLORS from "../../../theme/colors";
import DataSemnatura from "../../../components/data-semnatura/data-semnatura.component"
const CheckBoxWithText = (props) => {
  return (
    <div style={{ whiteSpace: "nowrap" }}>
      <CheckBox name={props.name}>{props.text}</CheckBox>
    </div>
  );
};
const ColumnContent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "0px 5px 0px 5px",
        flexFlow: "nowrap",
      }}
    >
      <div style={{ whiteSpace: "nowrap" }}>{props.text}</div>
      <Input
        name={props.name}
        style={{ width: props.inputWidth ||  "100%" }}
        suffix={props.suffix}
      />
    </div>
  );
};

const DateCaracteristice2 = () => {
  return (
    <>
      <Section color={COLORS.orange} className="date-caracteristice">
        <List counterStart={11}>
          <List.DottedItem>
            Construcţii pentru instituţii publice<sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="sănătate" name="sanatate" />
            <ColumnContent text="nr. de paturi" name="san-nr-pat" />
            <ColumnContent
              text="nr. de consultaţii"
              name="san-nr-consultatii"
            />
            <ColumnContent text="nr. de proceduri" name="san-nr-proceduri" />

            <CheckBoxWithText text="învăţământ" name="invatamant" />
            <ColumnContent
              text="nr. de săli de clasă"
              name="inv-nr-sali-clasa"
            />
            <ColumnContent text="nr. de locuri" name="inv-nr-locuri" />
            <ColumnContent text="nr. de grupe" name="inv-nr-grupe" />

            <CheckBoxWithText text="cultură" name="cultura" />
            <ColumnContent text="nr. de locuri" name="cult-nr-locuri" />
            <div></div>
            <div></div>

            <CheckBoxWithText text="hoteliere" name="hoteliere" />
            <ColumnContent text="nr. de camere" name="hotelier-nr-camere" />
            <ColumnContent text="nr. de locuri" name="hotelier-nr-locuri" />
            <div></div>

            <CheckBoxWithText text="culte" name="culte" />
            <ColumnContent text="nr. de locuri" name="culte-nr-locuri" />
            <div></div>
            <div></div>

            <CheckBoxWithText
              text="administrative şi financiare"
              name="admin-fintant"
            />
            <ColumnContent text="nr. de personal" name="admin-fin-nr-locuri" />
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Construcţii pentru comerţ, alimentaţie publică şi servicii
            <sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="comerţ" name="comerţ" />
            <ColumnContent text="nr. de personal" name="comert-nr-personal" />
            <div></div>
            <div></div>
          </Grid>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="alimentaţie publică" name="alim-pub" />
            <ColumnContent text="nr. de locuri" name="alim-pub-nr-locuri" />
            <ColumnContent text="nr. de personal" name="alim-pub-nr-personal" />
            <div></div>
          </Grid>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="servicii" name="servicii" />
            <ColumnContent text="nr. de personal" name="servicii-nr-personal" />
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Construcţii pentru sport, recreere<sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="sport" name="sport" />
            <ColumnContent text="nr. de locuri" name="sport-nr-locuri" />
            <div></div>
            <div></div>
          </Grid>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="recreere" name="recreere" />
            <ColumnContent text="nr. de locuri" name="recreere-nr-locuri" />
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Construcţii pentru activităţi productive<sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="productie" name="productie" />
            <ColumnContent
              text="nr. de personal"
              name="productie-nr-personal"
            />
            <div></div>
            <div></div>
          </Grid>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="depozitare" name="depozitare" />
            <ColumnContent
              text="nr. de personal"
              name="depozitare-nr-personal"
            />
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Alte caracteristici ale capacităţilor funcţionale pentru construcţii
            propuse, necuprinse în categoriile de mai sus:
          </List.DottedItem>
          <Input name="altele" style={{ width: "100%" }} />
          <List.NumberedItem pad>
            Asigurarea utilităţilor urbane<sup>1)</sup>
          </List.NumberedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="apă" name="apa" />
            <CheckBoxWithText text="canalizare" name="canalizare" />
            <CheckBoxWithText
              text="energie electrică"
              name="energie-electrica"
            />
            <CheckBoxWithText text="energie termică" name="energie-termica" />
            <CheckBoxWithText text="gaze naturale" name="gaze-naturale" />
            <CheckBoxWithText text="telefonizare" name="telefonizare" />
            <CheckBoxWithText text="salubritate" name="salubritate" />
            <CheckBoxWithText text="transport urban" name="transport-urban" />
            <div style={{ justifySelf: "right", marginRight: "20px" }}>
              Alte utilități
            </div>
            <CheckBoxWithText
              name="alte-utilitati-1"
              text={<Input name="alte-utilitati-1" style={{ width: "70%" }} />}
            />
            <CheckBoxWithText
              name="alte-utilitati-2"
              text={<Input name="alte-utilitati-2" style={{ width: "70%" }} />}
            />
            <CheckBoxWithText
              name="alte-utilitati-3"
              text={<Input name="alte-utilitati-3" style={{ width: "70%" }} />}
            />
          </Grid>
          <List.NumberedItem pad>
            Garaje şi parcaje<sup>1)</sup>
          </List.NumberedItem>
          <Grid columns={3} autoFlow="row" columnWidth="1fr" style={{gridTemplateColumns:"1fr 1fr 2fr"}}>
            <CheckBoxWithText text="garaje" name="garaje" />
            <ColumnContent
              inputWidth = "40%"
              text="nr. de locuri"
              name="garaje-nr-locuri"
            />
            <ColumnContent
              text="Suprafaţa construită desfăşurată"
              suffix = "m²"
              name="scd-garaje"
            />
            <CheckBoxWithText text="parcaje" name="garaje" />
            <ColumnContent
              inputWidth = "40%"
              text="nr. de locuri"
              name="parcaje-nr-locuri"
            />
            <ColumnContent
              text="Suprafaţa construită desfăşurată"
              suffix = "m²"
              name="scd-parcaje"
            />
          </Grid>
          <List.NumberedItem pad>
            <Grid columns={3} autoFlow="row" columnWidth="1fr">
              <div>Drumuri, alei, platforme:</div>
              <ColumnContent text = "suprafaţă carosabil" name="s-carosabil" suffix="m²"/>
              <ColumnContent text = "suprafaţă pietonală" name="s-pietonal" suffix="m²"/>
            </Grid>
          </List.NumberedItem>
          <List.NumberedItem pad>
            Spații verzi <sup>1)</sup>
          </List.NumberedItem>
          <Grid columns={4} autoFlow="row" style={{gridTemplateColumns:"1fr 1.5fr 1fr 1.5fr"}}>
          <CheckBoxWithText text="arbori tăiaţi" name="arbori-taiati" />
          <ColumnContent
              inputWidth="50%"
              text="număr"
              name="nr-arbori-taiati"
            />
          <CheckBoxWithText text="arbori menţinuţi" name="arbori-mentinuti" />
          <ColumnContent
              inputWidth="50%"
              text="număr"
              name="nr-arbori-mentinuti"
            />
          <CheckBoxWithText text="arbori plantaţi" name="arbori-plantati" />
          <ColumnContent
              inputWidth="50%"
              text="număr"
              name="nr-arbori-plantati"
            />
          <CheckBoxWithText text="spaţii verzi" name="spatii-verzi" />
          <ColumnContent
              inputWidth="50%"
              text="suprafaţă"
              name="nr-arbori-mentinuti"
              suffix="m²"
            />
          </Grid>
          <List.NumberedItem pad>
          Modul de evacuare a deşeurilor
          </List.NumberedItem>
          <Input name="evacuare-deseuri"
          style={{width:"100%"}}
            />
          <List.NumberedItem pad>
          Măsuri de securitate la incendiu şi protecţie civilă
          </List.NumberedItem>
          <Input name="securitate-incendiu"
          style={{width:"100%"}}
            />
          <List.NumberedItem pad>
          Măsuri de protecţie a mediului
          </List.NumberedItem>
          <Input name="protectia-mediului"
          style={{width:"100%"}}
            />
          <List.NumberedItem pad>
          Alte caracteristici specifice
          </List.NumberedItem>
          <Input name="alte-caracteristici"
          style={{width:"100%"}}
            />
        </List>
        <DataSemnatura/>
      </Section>

    </>
  );
};

export default DateCaracteristice2;
