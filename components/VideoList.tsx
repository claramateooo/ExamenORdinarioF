import { FunctionComponent } from "preact";
import { Video } from "../types.ts";

type Props={videos:Video[];userid:string;};
const VideoList:FunctionComponent<Props>=({ videos,userid
})=>{

    return(<div>{videos.map((video)=>(
       <div key={video.id}>
        
        <img src={video.thumbnail}alt={video.title}/>
        <h3>{video.title}</h3>
        <p>Release date: {new Date(video.date).toLocaleDateString()}</p>
    
         
         </div>))}
         </div>
         );
};
export default VideoList;