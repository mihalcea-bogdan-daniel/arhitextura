import React from 'react'
import './verificatori.styles.scss'

import Input from '../../components/inputs/input.component';
import Section from "../../components/section/section.component";
import COLORS from "../../theme/colors";
const Verificatori = ()=> {
    
    return(
        <Section color={COLORS.orange}>
            <p className = "indent" style={{marginTop:"5mm"}}>{`Verificarea Documentaţiei tehnice ⎯ D.T., în conformitate cu prevederile Legii nr.10/1995, a fost efectuată de:`}</p>
            <div className="tabel-verificatori" style={{paddingTop:"10px", fontSize:"12pt"}}>
                <div>
                    <div>Cerința A</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-A" name="verif-A" rememberdata/></div>
                </div>
                <div>
                    <div>Cerința D</div>    
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-D" name="verif-D" rememberdata/></div>
                </div>
                <div>
                    <div>Cerința B</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-B" name="verif-B" rememberdata/></div>
                </div>
                <div>
                    <div>Cerința E</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-E" name="verif-E" rememberdata/></div>
                </div>
                <div>
                    <div>Cerința C</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-C" name="verif-C" rememberdata/></div>
                </div>
                
                <div>
                    <div>Cerința F</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-F" name="verif-F" rememberdata/></div>
                </div>
                <div></div>
                <div>
                    <div>Cerința Af</div>
                    <div><Input style={{width:"100%", marginLeft:"0", fontSize:"12pt"}} id="verif-Af" name="verif-Af" rememberdata/></div>
                </div>
            </div>

        </Section>
    )
    
}

export default Verificatori;