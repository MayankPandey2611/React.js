
const EmpDesign = (props)=>{
    return(
        <>
            <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.emno}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.nm}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.dep}</td>
                <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{props.sal}</td>
            </tr>
        </>
    )
}

export default EmpDesign;