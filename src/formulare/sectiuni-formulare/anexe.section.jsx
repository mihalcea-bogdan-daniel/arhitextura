import React from 'react'
import './anexe.scss'
import Input from '../../components/inputs/input.component'
import TextLineTrough from '../../components/linetrough-text/text-linetrough.component'
import COLORS from '../../theme/colors'
import Section from "../../components/section/section.component";
import DataSemnatura from '../../components/data-semnatura/data-semnatura.component'
const Anexe = () =>{
    return(
        <Section color={COLORS.purple} className="anexe">
            <p className="indent">
                Durata estimată a executării lucrărilor solicitată este de
                <Input className="centrat" id="durata-lucrari" name="durata-lucrari" style = {{width:"80px"}} />
                <TextLineTrough words={[" luni/", "zile"]}/>, 
                în baza prevederilor Documentaţiei tehnice ⎯ D.T. pentru autorizarea executării lucrărilor de construire (D.T.A.C. + D.T.O.E.),
                respectiv desfiinţarea construcţiilor (D.T.A.D.) ⎯ anexată prezentei, conform graficului de execuţie, semnat
                şi parafat de proiectant, anexat prezentei.
            </p>
            <p className="indent" style={{marginTop:"10px", marginBottom:"0px", padding:"0px"}}>
                Anexez la prezenta cerere:
            </p>
            <ol type="a" style={{marginTop:"0px", marginBottom:"0px"}}>
                <li>
                    Certificatul de urbanism nr.<Input className="centrat" id="nr-cu" name="nr-cu" style = {{width:"100px"}} />/
                    <Input className="centrat" id="data-cu" name="data-cu" style = {{width:"80px"}} />
                    emis de
                    <Input className="centrat" id="emitent-cu" name="emitent-cu" style = {{width:"230px"}} />(copie)
                </li>
                <li>
                    dovada titlului asupra imobilului ⎯ teren şi/sau construcţii/extrasul de plan cadastral actualizat la
                    zi şi extrasul de carte funciară de informare actualizat la zi (copie legalizată)
                    <div><Input className="centrat" id="dovada-propr" name="dovada-propr" style = {{width:"100%", margin:"0px"}} /></div>
                </li>
                <li>
                    Documentaţia tehnică ⎯ D.T.A.C./D.T.O.E./D.T.A.D., după caz, compusă din:
                    <div><Input className="centrat" id="dtac-opis-1" name="dtac-opis-1" style = {{width:"100%", margin:"0px"}} /></div>
                    <div><Input className="centrat" id="dtac-opis-2" name="dtac-opis-2" style = {{width:"79%", margin:"0px"}} />(2 exemplare originale)</div>
                </li>
            </ol>
                <p className="indent" style={{margin:"0px 0px 5px 0px", padding:"0px"}}>
                La elaborarea Documentaţiei tehnice ⎯ D.T. au fost respectate toate procedurile de notificare a
autorităţii publice pentru protecţia mediului prevăzute de Lege, care fac obiectul procedurii de evaluare a
impactului asupra mediului.
                </p>
                <ol type="a" start ="4"  style={{marginTop:"0px", marginBottom:"0px"}}>
                    <li>
                        avize/acorduri, studii de specialitate stabilite prin certificatul de urbanism (copie):
                        <ol className="nested-list" type="1">
                            <li>
                                avize şi acorduri privind utilităţile urbane şi infrastructura:
                                <div className="tabel-2-coloane">
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-1" name="avize-utilitati-1" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-2" name="avize-utilitati-2" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-3" name="avize-utilitati-3" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-4" name="avize-utilitati-4" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-5" name="avize-utilitati-5" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-utilitati-6" name="avize-utilitati-6" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                avize şi acorduri privind securitatea la incendiu, protecţia civilă, sănătatea populaţiei:
                                <div className="tabel-2-coloane">
                                    <div>
                                        <Input className="centrat" id="avize-isu-1" name="avize-isu-1" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-isu-2" name="avize-isu-2" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-isu-3" name="avize-isu-3" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-isu-4" name="avize-isu-4" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                avize/acorduri specifice ale administraţiei publice centrale şi/sau ale serviciilor deconcentrate
                                ale acestora:
                                <div className="tabel-2-coloane">
                                    <div>
                                        <Input className="centrat" id="avize-admin-1" name="avize-admin-1" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-admin-2" name="avize-admin-2" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-admin-3" name="avize-admin-3" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-admin-4" name="avize-admin-4" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                studii de specialitate (câte 1 exemplar copie):
                                <div className="tabel-2-coloane">
                                    <div>
                                        <Input className="centrat" id="avize-studii-1" name="avize-studii-1" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-studii-2" name="avize-studii-2" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-studii-3" name="avize-studii-3" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="avize-studii-4" name="avize-studii-4" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                raport de expertiză tehnică pentru lucrări de intervenţie la construcţii existente ⎯ consolidare,
                                modificare, extindere, reabilitare, schimbare de destinaţie ⎯ , după caz (1 exemplar copie) ;
                            </li>
                            <li>
                                raport de audit energetic pentru lucrări de intervenţie la clădiri existente în vederea creşterii
                                performanţei energetice (1 exemplar copie) ;
                            </li>
                            <li>
                            referatele de verificare a documentaţiei privind asigurarea cerinţelor esenţiale de calitate în
                            construcţii, corespunzător categoriei de importanţă a construcţiei (câte 1 exemplar copie)
                                <div className="tabel-2-coloane">
                                    <div>
                                        <Input className="centrat" id="referat-1" name="referat-1" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="referat-2" name="referat-2" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="referat-3" name="referat-3" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                    <div>
                                        <Input className="centrat" id="referat-4" name="referat-4" style = {{width:"100%", margin:"0px"}} />
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ol>
                <ol type="a" start="5" style={{marginTop:"0px", marginBottom:"0px"}}>
                <li>
                        punctul de vedere/actul administrativ al autorităţii competente pentru protecţia mediului: (copie) ;
                    </li>
                    <li>
                        dovada înregistrării documentaţiei la Ordinul Arhitecţilor din România (1 exemplar copie).
                    </li>
                    <li>
                        documentele de plată a taxelor legale în vederea autorizării (copie) ;
                        <div className="tabel-2-coloane">
                            <div>
                                <Input className="centrat" id="doc-taxe-1" name="doc-taxe-1" style = {{width:"100%", margin:"0px"}} />
                            </div>
                            <div>
                                <Input className="centrat" id="doc-taxe-2" name="doc-taxe-2" style = {{width:"100%", margin:"0px"}} />
                            </div>
                            <div>
                                <Input className="centrat" id="doc-taxe-3" name="doc-taxe-3" style = {{width:"100%", margin:"0px"}} />
                            </div>
                            <div>
                                <Input className="centrat" id="doc-taxe-4" name="doc-taxe-4" style = {{width:"100%", margin:"0px"}} />
                            </div>
                        </div>
                    </li>
                    <li>
                        anexa la „Cererea pentru emiterea autorizaţiei de construire/desfiinţare”, completată cu toate
                        elementele necesare descrierii lucrărilor pentru care se solicită autorizaţia (2 exemplare originale)
                    </li>
                </ol>
                <div className="declaratie-proprie-raspundere">
                Declar pe propria răspundere că datele menţionate în prezenta cerere sunt exacte şi mă angajez să
respect, în cunoştinţa prevederilor Codului penal privind infracţiunea de fals în declaraţii, autorizaţia de
construire şi documentaţia aferentă vizată spre neschimbare.
                </div>
                <DataSemnatura/>
        </Section>
    )
}

export default Anexe;