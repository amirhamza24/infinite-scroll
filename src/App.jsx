import "./App.css"
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


const style = {
  border: "2px solid green",
  margin: 12,
  padding: 8,
}

function App() {

  const [dataSource, setDataSource] = useState(Array.from({ length: 10 }));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log("run app")
  }, [])

  const fetchMoreData = () => {
    if(dataSource.length < 100) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 10 })))
      }, 500);
    } else {
      setHasMore(false);
    }
  }

  return (
    <div className="App">

      <h3>Infinite Scroll</h3>

      <div id="parentScrollDiv" style={{height: 500, overflow:'auto'}}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data</p>}
          // height={500}
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => {
            return (
            <div key={index} style={style}>
              {index + 1} this is div infinite Scroll
            </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default App
