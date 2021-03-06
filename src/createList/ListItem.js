import React from "react";

import CustomCard from "../common/CustomCard";
import ListItemFooter from "./ListItemFooter";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const ListItem = ({item, deleteProduct, toggleProduct, list}) => (

        <CustomCard
            containerClass="list-item"
            image={item.image}
            link="#"
            footer={<ListItemFooter list={list} item={item} deleteProduct={deleteProduct} />}
            action={() => toggleProduct(item.id)}
        >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                <Checkbox checked={item.checked} />
            </div>
                <Typography component="p">{item.quantity} {item.unit}</Typography>
                <Typography component="p">{item.price}</Typography>
        </div>
        </CustomCard>
)

export default ListItem;