import { useState, useEffect } from 'react';
import axios from 'axios';


const useResources = (resource) => {
  const [resources, setResources]  = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  // HOOKS--useEffect
  // combines componentDidMount and componentDidUpdate lifecycles
  // in a class based comp.

  // 'resource' in arr below gets updated when our props changes
  // if updated, only then will useEffect be called and fetchResource be called

  // if the arr is not called/written at the end
  // useEffect will go in a  infinite loop and be called every time

  // if an empty arr is called, useEffect will be only called the first time
  //  it is similar to componentDidMount
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

export default useResources;
