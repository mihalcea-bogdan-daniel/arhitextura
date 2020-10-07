import React from "react";
import Section from "../../../components/section/section.component";
import Input from "../../../components/inputs/input.component";
import Grid from "../../../components/grid-container/grid-container.component";
import CheckBox from "../../../components/checkbox/checkbox.component";
import List from "../../../components/list-component/list.component";
import COLORS from "../../../theme/colors";

const DateCaracteristice2 = () => {
    return (
    <>
        <Section color={COLORS.orange} className="date-caracteristice">
        <List counterStart={11}>
            <List.DottedItem>
            Construcţii pentru instituţii publice<sup>1)</sup>
            </List.DottedItem>
            <List.DottedItem>
            Construcţii pentru comerţ, alimentaţie publică şi servicii<sup>1)</sup>
            </List.DottedItem>
            <List.DottedItem>
            Construcţii pentru sport, recreere<sup>1)</sup>
            </List.DottedItem>
            <List.DottedItem>
            Construcţii pentru activităţi productive<sup>1)</sup>
            </List.DottedItem>
            <List.DottedItem>
            Alte caracteristici ale capacităţilor funcţionale pentru construcţii propuse, necuprinse în categoriile
de mai sus:
            </List.DottedItem>
        </List>
        </Section>
    </>
    )
}

export default DateCaracteristice2;