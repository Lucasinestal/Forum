import React from 'react'
import styled from 'styled-components'

const P = styled.p`
padding: 10px;
`

const H4 = styled.h4`
    padding: 0px 10px;
`

const H3 = styled(H4)`
margin-top: 6rem;
`

export default function Rules() {
    return (
        <div>
            <P> <H3>Regler</H3>
            <div><P>
                Den som bryter mot någon av reglerna riskerar varning, avstängning eller permanent bannlysning.

                Vid första avstängningen blir man avstängd en vecka, vid andra en månad och vid tredje i sex månader. En varning eller avstängning preskriberas ett år efter att den började verkställas.

                Användare som begår särskilt allvarliga regelbrott kan bli avstängda från forumet i sex månader utan föregående avstängning. De kan även bli permanent bannlysta.
            </P></div>          
                <div>
                    <H4>1.01. Reklam och annonsering</H4>
                    <P>Privata eller kommersiella annonser, så som köpes-, säljes- eller bytesannonser, inlägg innehållande reklam eller inlägg med annat innehåll som användaren tjänar pengar eller andra fördelar på, är förbjudna.</P>
                </div>
                <div>
                   <H4>1.02. Upphovsrättsskyddat </H4>
                   <P>>Spridning eller publicering av upphovsrättsskyddat material utan upphovsmannens tillstånd är förbjudet.</P>
                </div>
                <div>
                   <H4>1.03. Hets mot folkgrupp</H4>
                  <P>Det är förbjudet att hota eller uttrycka missaktning mot särskilt utsatta grupper, med anspelning på ras, hudfärg, nationellt eller etniskt ursprung, trosbekännelse eller sexuell läggning.</P>
                </div>

                <div>
                   <H4>1.04. Uppvigling och hot</H4> 
                    <P>Uppvigling och grövre hot är förbjudet. Det är också förbjudet att organisera brottslig verksamhet från forumet.</P>
                </div></P>  
        </div>
    )
}
