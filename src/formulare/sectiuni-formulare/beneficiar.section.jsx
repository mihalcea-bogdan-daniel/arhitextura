import React from 'react'
import Input from '../../components/inputs/input.component'
import TextLineTrough from '../../components/linetrough-text/text-linetrough.component'
import COLORS from '../../theme/colors'
import Section from "../../components/section/section.component";
const SectiuneBeneficiar = () => {
    
    return(
        <Section color={COLORS.blue}>
            
            <p className="indent">Subsemnatul
                    <Input id="nume-beneficiar" name="nume-beneficiar" style={{width:"260px"}}/>, 
                    <span> CNP </span>
                    <Input className="centrat cnp" id="cnp-beneficiar" name="cnp-beneficiar" style = {{width:"260px"}} maxLength="13" minLength="13"/>, cu
                    <TextLineTrough words={[" domiciliul/", "sediul "]}/> în județul
                    <Input id="judet-beneficiar" name="judet-beneficiar" style={{width:"193px"}} />, 
                    <TextLineTrough words={[" municipiul/", "orașul/", "comuna "]}/>
                    <Input id="localitate-beneficiar" name="localitate-beneficiar" style={{width:"184px"}} />, 
                    satul
                    <Input id="sat-beneficiar" name="sat-beneficiar" style={{width:"190px"}} />, 
                    sectorul
                    <Input className="centrat"  id="sector-beneficiar" name="sector-beneficiar" style={{width:"20px"}} />, 
                    cod poștal
                    <Input className="centrat" id="cp-beneficiar" name="cp-beneficiar" style={{width:"50px"}} />, 
                    str.
                    <Input className="centrat" id="str-beneficiar" name="str-beneficiar" style={{width:"180px"}} />, 
                    nr.
                    <Input className="centrat" id="nr-beneficiar" name="nr-beneficiar" style={{width:"40px"}} />, 
                    bl.
                    <Input className="centrat" id="bloc-beneficiar" name="bloc-beneficiar" style={{width:"30px"}} />, 
                    sc.
                    <Input className="centrat" id="scara-beneficiar" name="scara-beneficiar" style={{width:"30px"}} />, 
                    et.
                    <Input className="centrat" id="etaj-beneficiar" name="etaj-beneficiar" style={{width:"30px"}} />, 
                    ap.
                    <Input className="centrat" id="ap-beneficiar" name="ap-beneficiar" style={{width:"30px"}} />, 
                    tel./fax.
                    <Input type="tel" className="centrat" id="tel-beneficiar" name="tel-beneficiar" style={{width:"120px"}} />, 
                    e-mail
                    <Input type="email" className="centrat" id="email-beneficiar" name="tel-beneficiar" style={{width:"251px"}} />, 
                    în calitate de reprezentant al
                    <Input className="centrat" id="firma-beneficiar" name="firma-beneficiar" style={{width:"250px"}} />, 
                    CUI
                    <Input className="centrat" id="cui-beneficiar" name="cui-beneficiar" style={{width:"100px"}} />, 
            </p>
        </Section>
    )
}

export default SectiuneBeneficiar;