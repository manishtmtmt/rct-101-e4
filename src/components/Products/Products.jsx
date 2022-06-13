import React from "react";
import { useEffect } from "react";
import { Container, Grid, GridItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state)=> state.product);

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  console.log(data)
  return (
    <Container>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {data.map((d)=>(
          <GridItem key={d.id}>
            <Product product={d} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
