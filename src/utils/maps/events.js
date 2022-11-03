export const handleEdit = () => { 
    console.log("edited")
    const geo = ref.current?.toGeoJSON();
    console.log(geo);
    if (geo?.type === 'FeatureCollection') {
      setGeojson(geo);
    }
}

export const handleDelete = (e) => { 
    console.log("delete") 
    console.log(e)
}