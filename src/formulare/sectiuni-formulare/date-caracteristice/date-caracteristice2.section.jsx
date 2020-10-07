import React from "react";
import Section from "../../../components/section/section.component";
import Input from "../../../components/inputs/input.component";
import Grid from "../../../components/grid-container/grid-container.component";
import CheckBox from "../../../components/checkbox/checkbox.component";
import List from "../../../components/list-component/list.component";
import COLORS from "../../../theme/colors";

const CheckBoxWithText = (props) => {
  return <div style={{whiteSpace:"nowrap"}}><CheckBox name={props.name}>{props.text}</CheckBox></div>;
};
const ColumnContent = (props) => {
    return(
        <div style={{display:"flex", padding:"0px 5px 0px 5px", flexFlow:"nowrap"}}>
            <div style={{whiteSpace:"nowrap"}}>{props.text}</div>
            <Input name = {props.name} style={{width:"100%"}}/>
        </div>
    )
}

const DateCaracteristice2 = () => {
  return (
    <>
      <Section color={COLORS.orange} className="date-caracteristice">
        <List counterStart={11}>
          <List.DottedItem>
            Construcţii pentru instituţii publice<sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
            <CheckBoxWithText text="sănătate" name="sanatate"/>
            <ColumnContent text="nr. de paturi" name="san-nr-pat"/>
            <ColumnContent text="nr. de consultaţii" name="san-nr-consultatii"/>
            <ColumnContent text="nr. de proceduri" name="san-nr-proceduri"/>

            <CheckBoxWithText text="învăţământ" name="invatamant"/>
            <ColumnContent text="nr. de săli de clasă" name="inv-nr-sali-clasa"/>
            <ColumnContent text="nr. de locuri" name="inv-nr-locuri"/>
            <ColumnContent text="nr. de grupe" name="inv-nr-grupe"/>

            <CheckBoxWithText text="cultură" name="cultura"/>
            <ColumnContent text="nr. de locuri" name="cult-nr-locuri"/>
            <div></div>
            <div></div>

            <CheckBoxWithText text="hoteliere" name="hoteliere"/>
            <ColumnContent text="nr. de camere" name="hotelier-nr-camere"/>
            <ColumnContent text="nr. de locuri" name="hotelier-nr-locuri"/>
            <div></div>

            <CheckBoxWithText text="culte" name="culte"/>
            <ColumnContent text="nr. de locuri" name="culte-nr-locuri"/>
            <div></div>
            <div></div>

            <CheckBoxWithText text="administrative şi financiare" name="admin-fintant"/>
            <ColumnContent text="nr. de personal" name="admin-fin-nr-locuri"/>
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Construcţii pentru comerţ, alimentaţie publică şi servicii
            <sup>1)</sup>
          </List.DottedItem>
          <Grid columns={4} autoFlow="row" columnWidth="1fr">
          <CheckBoxWithText text="comerţ" name="comerţ"/>
            <ColumnContent text="nr. de personal" name="comert-nr-personal"/>
            <div></div>
            <div></div>
          </Grid>
          <List.DottedItem>
            Construcţii pentru sport, recreere<sup>1)</sup>
          </List.DottedItem>
          <List.DottedItem>
            Construcţii pentru activităţi productive<sup>1)</sup>
          </List.DottedItem>
          <List.DottedItem>
            Alte caracteristici ale capacităţilor funcţionale pentru construcţii
            propuse, necuprinse în categoriile de mai sus:
          </List.DottedItem>
        </List>
      </Section>
    </>
  );
};

export default DateCaracteristice2;
