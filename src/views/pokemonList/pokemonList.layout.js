import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const pokemonListLayout = (props) => {
  const { listPokemon, handleSearch, searchList } = props;
  return (
    <div style={{ width: '60%' }}>
      <div>
        <ImageList sx={styles.imgList}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" style={styles.listSubheader}>Pokedex</ListSubheader>
            <Stack style={styles.stack} spacing={4}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={listPokemon.map((option) => option.name)}
                onInputChange={(event, newInputValue) => {
                  handleSearch(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Buscar pokémon"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Stack>
          </ImageListItem>

          {searchList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={`${item.img}`}
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
      </div>
    </div>
  );
};

const styles = {
  imgList: {
    width: "100%",
    height: "70%",
  },
  stack: {
    marginTop: '20px',
  },
  listSubheader: {
    backgroundColor: '#ED462F',
  },
  divTable: {
    alignItems: 'center',
  },
  buttonEnviar: {
    marginTop: '20px',
    marginBottom: '20px',
    alignItems: 'center',
  }
};

export default pokemonListLayout;
