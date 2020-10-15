import React from "react";

import Checkbox from "../../components/checkbox/checkbox.component";
import Section from "../../components/section/section.component";
import COLORS from "../../theme/colors";
const TipConstructie = () => {
  return (
    <Section color={COLORS.orange}>
      <p className="indent">
        {`În conformitate cu prevederile art.3 din Legea nr.50/19911)`}
      </p>
      <form action="">
        <Checkbox margin="40px" name="v-a">
          {
            "a) lucrări de construire, reconstruire, consolidare, modificare, extindere, reabilitare, schimbare de destinaţie sau de reparare a construcţiilor de orice fel, precum şi a instalaţiilor aferente acestora, cu excepţia celor prevăzute la art.11 din Legea nr.50/1991;"
          }
        </Checkbox>
        <Checkbox margin="40px" name="v-b">
          {
            "b) lucrări de construire, reconstruire, extindere, reparare, consolidare, protejare, restaurare, conservare, precum şi orice alte lucrări, indiferent de valoarea lor, care urmează să fie efectuate la construcţii reprezentând monumente istorice, stabilite potrivit legii;"
          }
        </Checkbox>
        <Checkbox margin="40px" name="v-c">
          {
            "c) lucrări de construire, reconstruire, modificare, extindere, reparare, modernizare şi reabilitare privind căile de comunicaţie de orice fel, drumurile forestiere, lucrările de artă, reţelele şi dotările tehnicoedilitare, lucrările hidrotehnice, amenajările de albii, lucrările de îmbunătăţiri funciare, lucrările de instalaţii de infrastructură, lucrările pentru noi capacităţi de producere, transport, distribuţie a energiei electrice şi/sau termice, precum şi de reabilitare şi retehnologizare a celor existente;"
          }
        </Checkbox>
        <Checkbox margin="40px" name="v-d">
          {
            "d) împrejmuiri şi mobilier urban, amenajări de spaţii verzi, parcuri, pieţe şi alte lucrări de amenajare a spaţiilor publice;"
          }
        </Checkbox>
        <Checkbox margin="40px" name="v-e">
          {
            "e) lucrări de foraje şi excavări necesare pentru efectuarea studiilor geotehnice şi a prospecţiunilor geologice, proiectarea şi deschiderea exploatărilor de cariere şi balastiere, a sondelor de gaze şi petrol, precum şi a altor exploatări de suprafaţă sau subterane;"
          }
        </Checkbox>
        <Checkbox margin="40px" name="v-f">
          {`f) lucrări, amenajări şi construcţii cu caracter provizoriu, necesare în vederea organizării executării lucrărilor, în condiţiile prevăzute la art.7 alin.(1) din Legea nr.50/1991;`}
        </Checkbox>
        <Checkbox margin="40px" name="v-g">
          {`g) organizarea de tabere de corturi, căsuţe sau rulote;`}
        </Checkbox>
        <Checkbox margin="40px" name="v-h">
          {`h) lucrări de construcţii cu caracter provizoriu, chioşcuri, tonete, cabine, spaţii de expunere situate pe căile şi spaţiile publice, corpuri şi panouri de afişaj, firme şi reclame, precum şi anexele gospodăreşti ale exploataţiilor agricole situate în extravilan;`}
        </Checkbox>
        <Checkbox margin="40px" name="v-i">
          {`i) cimitire ⎯ noi şi extinderi.`}
        </Checkbox>
        <Checkbox margin="40px" name="v-j">
          {`j) lucrări de desfiinţare a construcţiilor de la lit. a)⎯h).`}
        </Checkbox>
      </form>
    </Section>
  );
};

export default TipConstructie;
