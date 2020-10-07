import React from 'react'
import './f8-cerere-autorizatie.styles.scss'


//Forms import
import Input from '../../components/inputs/input.component';
import TextLineTrough from '../../components/linetrough-text/text-linetrough.component';
//Sectiuni
import Page from '../../components/page-component/page.component';
import SectiuneBeneficiar from '../sectiuni-formulare/beneficiar.section';
import SectiuneImobil from '../sectiuni-formulare/imobil.section'
import SectiuneProiectant from '../sectiuni-formulare/proiectant.section'
import Verificatori from '../sectiuni-formulare/verificatori.section'
import Anexe from '../sectiuni-formulare/anexe.section'
import TipConstructie from '../sectiuni-formulare/tip-constructie.section';
import DateCaracteristice from '../sectiuni-formulare/date-caracteristice/date-caracteristice.section'
import DateCaracteristice2 from '../sectiuni-formulare/date-caracteristice/date-caracteristice2.section'
//JSON
import listaCatConstructii from './categorii-de-constructii.json';
import CategorieCosntructii from '../sectiuni-formulare/categorie-constructii.section';
const Content = () => {
    return(
        <div className="page-parent">
            {/* <section id = "pagina-1" className = "pagina"> */}
            <Page id ="pagina-1">
                
                <p style={{marginLeft:5, padding:0}}>Către</p>
                <Input defaultValue="Primarul" id="catre" name = "catre" style={{width:"300px"}}/>
                <span style={{fontSize:"8pt", display:"block", textAlign:"center", width:"300px"}}>{`[conducătorul autorităţii administraţiei publice emitente *]`}</span>
                <h1>
                    {`CERERE\npentru emiterea autorizației de `}
                    <TextLineTrough words={["construire/", "desființare"]}/>
                </h1>
                <SectiuneBeneficiar />
                <SectiuneImobil />
                <SectiuneProiectant />
                <Verificatori />
                <div className="nota-subsol">
                    <div className="grid-2-columns">
                        <div> <sup>*)</sup>Se completează, după caz:</div>
                        <div>
                            <li> preşedintele consiliului judeţean ;</li>
                            <li> primarul general al municipiului Bucureşti ;</li>
                            <li> primarul sectorului .... al municipiului Bucureşti ;</li>
                            <li> primarul municipiului ............................ ;</li>
                            <li> primarul oraşului .................................. ;</li>
                            <li> primarul comunei ................................. ;</li>
                        </div>
                    </div>
                </div>

            </Page>
            {/* </section> */}
            <Page id = "pagina-2" >
                <Anexe />
            </Page>
            <Page id = "pagina-3" >
                <h1> {`A N E X Ă\nla Cererea pentru emiterea autorizaţiei de construire/desfiinţare`}</h1>
                <h4 className="indent">Capitolul 1 - Tipuri de lucrări</h4>
                <TipConstructie />
                <h4 className="indent">Capitolul 2 - Categorii de construcții</h4>
                <CategorieCosntructii tabel={listaCatConstructii} indentSubCat = {30}/>
                <div className="nota-subsol" style={{marginTop:"120px"}}>
                    <p>Se introduce "X" în casetă</p> 
                    
                </div>
            </Page>
            <Page id = "pagina-4" >
                <h4 className="indent">Capitolul 3 ⎯ Date caracteristice privind amplasamentele şi construcţiile </h4>
                <DateCaracteristice/>
                <div className="nota-subsol" style={{marginTop:"10px"}}>
                    <div style={{marginLeft:"40px"}}><sup>2)</sup>Conform Legii nr.350/2001 cu modificările şi completările ulterioare şi HGR nr.525/1996, republicată</div>
                    <div style={{marginLeft:"40px"}}><sup>3)</sup>Documentul naţional de referinţă este STAS 4908-85</div>
                </div>
            </Page>
            <Page id = "pagina-5" >
                <DateCaracteristice2>
                
                </DateCaracteristice2>
            </Page>
        </div>
    )
}

export default Content;