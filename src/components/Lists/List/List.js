import React from "react";
import Icon from '../../Ui/Icon';
import "./List.scss";
const ListItems = props => {
  const pInfo = [];
  for (let i in props.personInfo) {
    pInfo.push({
      name: i,
      value: props.personInfo[i]
    });
  }

  return (
<tr>
{pInfo.map((pl, i) => {
    return (
      <td key={i}>
        <p style={{ fontSize: 25 }}>{pl.value}</p>
      </td>
    );
  })
}
<td>
<Icon classes="fa fa-trash" color='red' onClick={(id) => props.remove(id)} />
<Icon classes="fa fa-pencil" />
</td>


</tr>

    
   
  );
};

export default ListItems;
