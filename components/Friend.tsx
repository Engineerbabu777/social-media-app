
import Avatar from './Avatar';

export default function Friend({}) {



    return(<>


                 <div className="flex gap-3 py-2  ">
                    <Avatar />
                    <div>
                        <h3 className="font-semibold text-lg">Dev</h3>
                        <p className="text-sm text-gray-500 leading-4">5 mutual connections</p>
                    </div>
                  </div>
    
    
    
    </>)
}