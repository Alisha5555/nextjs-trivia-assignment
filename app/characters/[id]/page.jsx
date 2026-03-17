import Character from "@/components/Character.jsx"

export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return data.results.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function CharacterDetail( props ) {
    const {id} = props.params;

    const response = await fetch("https://rickandmortyapi.com/api/character/" + id )
    const data = await response.json()
    return (
        <Character name={data.name} species={data.species} imageURL={data.image}/>
    )
}
