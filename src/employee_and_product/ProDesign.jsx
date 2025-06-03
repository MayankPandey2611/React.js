
const ProDesign = (props)=>{

    return(
        <>
            <tr  style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.pn}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.pnm}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.pq}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.pc}</td>
            </tr>
        </>
    )
}

export default ProDesign;