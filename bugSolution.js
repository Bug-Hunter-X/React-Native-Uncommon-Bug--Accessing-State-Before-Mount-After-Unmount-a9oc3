import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return () => setIsMounted(false);
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

export default MyComponent;