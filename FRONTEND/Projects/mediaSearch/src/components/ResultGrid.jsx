import ResultCard from "./ResultCard"
import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi.js"
import { setLoading, setResults, setError } from '../redux/features/searchSlice.js'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query === '') return;

    const getData = async () => {

      try {
        dispatch(setLoading()); 
        let data = [];
        if (activeTab === 'Photos') {
          data = await fetchPhotos(query);
          data = data.results.map((item) => {
            return {
              id: item.id,
              type: 'photo',
              src: item.urls.full,
              thumbnail: item.urls.small,
              username: item.user.first_name
            }
          });
        } else if (activeTab === 'Videos') {
          data = await fetchVideos(query);
          data = data.videos.map((item) => {
            return {
              id: item.id,
              type: 'video',
              src: item.url,
              thumbnail: item.video_files[0].link,
              username: item.user.name
            }
          });
        } else if (activeTab === "GIF's") {
          data = await fetchGifs(query);
          data = data.data.map((item) => {
            return {
              id: item.id,
              type: 'gif',
              src: item.url,
              thumbnail: item.images.fixed_width.url,
              username: item.title
            }
          });
          
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    }
    getData();

  }, [activeTab, query, dispatch])

  if (query.trim() === '') return <h1 className="text-xl flex justify-center items-center text-gray-700 mt-30">Search Something...</h1>
  if (error) return <h1 className="text-xl flex justify-center items-center text-gray-700 mt-30">Error</h1>
  if (loading) return <h1 className="text-xl flex justify-center items-center text-gray-700 mt-30">Loading...</h1>
  if (results.length === 0) return <h1 className="text-xl flex justify-center items-center text-gray-700 mt-30">No Data Found</h1>

  return (
    <div className="flex gap-9 flex-wrap mx-24 mt-10">
      { 
        results.map((res) => {
          return (
            <ResultCard key={res.id} result={res} />
          )
        })
      }

    </div>
  )
}

export default ResultGrid