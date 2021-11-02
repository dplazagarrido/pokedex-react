import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';

const pokemonListLayout = (props) => {
  const { listPokemon } = props;
  return (
    <ImageList sx={{ width: "80%", height: "70%" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Pokedex</ListSubheader>
      </ImageListItem>
      {listPokemon.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={`${item.img}&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={`${item.name} #${item.id}`}
            subtitle={item.types}
            actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default pokemonListLayout;
