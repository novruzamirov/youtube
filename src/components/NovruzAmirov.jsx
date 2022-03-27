import React from 'react';

// const handleOwner = (shouldSeen) => {
//     if(!shouldSeen){
//         return(
//             <div>Novruz Amirov</div>
//         )
//     }
//     else{
//         return ;
//     }
// }

class NovruzAmirov extends React.Component{
    handleOwner = (a) => {
        if(a.length === 0){
            return(
                <div>
                    <h6>Created by</h6>
                    <h2>Novruz Amirov</h2>
                </div>
            )
        }
        else{
            return ;
        }
    }
    render(){
        return(
            <div className='novruz'>
                {this.handleOwner(this.props.shouldSeen)}
            </div>
        )
    }
}

export default NovruzAmirov