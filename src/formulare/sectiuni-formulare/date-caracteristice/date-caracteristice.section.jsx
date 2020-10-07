import React from "react";
import Section from "../../../components/section/section.component";
import SmartTable from "../../../components/table/smart-table.component";
import Input from "../../../components/inputs/input.component";
import Grid from "../../../components/grid-container/grid-container.component";
import CheckBox from "../../../components/checkbox/checkbox.component";
import SimpleTable from "../../../components/table/simple-table.component";
import List from "../../../components/list-component/list.component";
import dateInaltimi from "./date-caracteristice-inaltimi.json";
import dataSistemConstructiv from "./date-caracteristici-constructive.json";
import dataNiveluri from "./date-caracteristice-niveluri.json";
import COLORS from "../../../theme/colors";

const DateCaracteristice = () => {
  return (
    <>
      <Section color={COLORS.orange} className="date-caracteristice">
        <List>
          <List.NumberedItem>
            Suprafața terenului:
            <Input name="A-teren" style={{ width: "100%" }} suffix="m²" />
          </List.NumberedItem>
          <List.NumberedItem>
            Situarea terenului faţă de străzile adiacente
            <Input name="sit-teren" style={{ width: "100%" }} />
          </List.NumberedItem>
          <List.NumberedItem>
            Procentul de ocupare a terenului ⎯ POT<sup>{`2)`}</sup>: existent
            <Input name="POT-existent" style={{ width: "100%" }} suffix="%" />
            propus
            <Input name="POT-propus" style={{ width: "100%" }} suffix="%" />
          </List.NumberedItem>
          <List.NumberedItem>
            Coeficientul de utilizare a terenului ⎯ CUT<sup>{`2)`}</sup>:
            existent
            <Input name="CUT-existent" style={{ width: "100%" }} />
            propus
            <Input name="CUT-propus" style={{ width: "100%" }} />
          </List.NumberedItem>
          <List.NumberedItem>Alinierea construcţiilor:</List.NumberedItem>
          <List.DottedItem>
            Corpul de clădire cel mai avansat faţă de limita proprietăţii la
            stradă se află la
            <Input
              className="centrat"
              name="distanta-minima"
              style={{ width: "100%" }}
              suffix="m"
            />
          </List.DottedItem>
          <List.DottedItem>
            Distanţele minime ale construcţiilor faţă de vecinătăţi sunt:
          </List.DottedItem>
          <List.BlankItem>
            de
            <Input
              className="centrat"
              name="distant-limita-1"
              style={{ width: "30%", marginRight: "5px" }}
              suffix="m "
            />
            faţă de limita de proprietate din
            <Input name="denumire-limita-1" style={{ width: "100%" }} />
          </List.BlankItem>
          <List.BlankItem>
            de
            <Input
              className="centrat"
              name="distant-limita-2"
              style={{ width: "30%", marginRight: "5px" }}
              suffix="m "
            />
            faţă de limita de proprietate din
            <Input name="denumire-limita-2" style={{ width: "100%" }} />
          </List.BlankItem>
          <List.BlankItem>
            de
            <Input
              className="centrat"
              name="distant-limita-3"
              style={{ width: "30%", marginRight: "5px" }}
              suffix="m "
            />
            faţă de limita de proprietate din
            <Input name="denumire-limita-3" style={{ width: "100%" }} />
          </List.BlankItem>
          <List.NumberedItem>
            Numărul de corpuri de clădiri
            <Input name="nr-corp-cladiri" style={{ width: "25%" }} />
            , din care: existente
            <Input name="nr-corp-cladiri-existente" style={{ width: "25%" }} />
            desfiinţate
            <Input
              name="nr-corp-cladiri-desfiintate"
              style={{ width: "25%" }}
            />
          </List.NumberedItem>
          <List.BlankItem style={{ marginLeft: "47%" }}>
            menţinute
            <Input name="nr-corp-cladiri-mentinute" style={{ width: "100%" }} />
            propuse
            <Input name="nr-corp-cladiri-propuse" style={{ width: "100%" }} />
            rezultate
            <Input name="nr-corp-cladiri-rezultate" style={{ width: "100%" }} />
          </List.BlankItem>
          <List.NumberedItem padded>
            Suprafeţe <sup>{`3)`}</sup>:
          </List.NumberedItem>
          <SmartTable />
          <List.Note>
            * Totalul rezultă prin însumarea suprafeţelor înscrise la rubricile
            „menţinute” şi „propuse”.
          </List.Note>
          <List.NumberedItem padded>
            Înălţimea construcţiilor propuse {`(`}în m{`)`}:
          </List.NumberedItem>
          <SimpleTable data={dateInaltimi} />
          <List.NumberedItem padded>Numărul de niveluri</List.NumberedItem>
          <SimpleTable data={dataNiveluri} />
          <List.NumberedItem padded>
            Caracteristici constructive şi aspect exterior
          </List.NumberedItem>
          <SimpleTable data={dataSistemConstructiv} noSuffix />
          <List.NumberedItem padded>
            Capacităţi funcţionale ale construcţiilor proiectate:
          </List.NumberedItem>
          <List.DottedItem>
            Construcţii de locuinţe<sup>{`1)`}</sup>
          </List.DottedItem>
          <Grid columns={4} rows={2} autoFlow={"row"}>
            <CheckBox>principale(permanente)</CheckBox>
            <CheckBox>sezoniere (de vacanţă)</CheckBox>
            <CheckBox>pentru închiriere</CheckBox>
            <CheckBox>sociale</CheckBox>
            <CheckBox>de serviciu</CheckBox>
            <CheckBox>de necesitate</CheckBox>
            <CheckBox>de intervenţie</CheckBox>
            <CheckBox>de protocol</CheckBox>
          </Grid>
          <List.BlankItem>
          Număr de aprtamente propuse
          <Input name="nr-apartamente" style={{ width: "100%" }} />
          din care cu: 1 cam.
          2 cam.
          <Input
              name="nr-apartamente-2-cam"
              style={{ width: "100%", marginRight: "5px" }}
            />
          3 cam.
          <Input
              name="nr-apartamente-3-cam"
              style={{ width: "100%", marginRight: "5px" }}
              />
          4 cam.
          <Input
              name="nr-apartamente-4-cam"
              style={{ width: "100%", marginRight: "5px" }}
              />
          5 cam.
          <Input
              name="nr-apartamente-5-cam"
              style={{ width: "100%", marginRight: "5px" }}
            />
          </List.BlankItem>
        </List>
      </Section>
    </>
  );
};

export default DateCaracteristice;
