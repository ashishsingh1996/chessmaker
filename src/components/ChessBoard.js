import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form";


export const ChessBoard = () => 
{
    const RefreshPage = ()=>
    {
        window.location.reload();
    }
   
    const [matrixNum, setmatrixNum] = useState('')

    const [colMatrixNum, setcolMatrixNum] = useState('')
    let Num;
    const { register, handleSubmit } = useForm({defaultValues : { matrixNumber : 8}});

    const onSubmit = data => 
    {
       console.log(data.matrixNumber)
       Num = data.matrixNumber
       let DecNum = Num;
       setmatrixNum(DecNum)
       setcolMatrixNum(Num)
    };

   useEffect(() => 
    {
        var ChessTable = document.createElement('table');

        var center = document.createElement('center');

        var ChessTable = document.createElement('table');
       
        for (var i = 0; i < matrixNum; i++) 
        {
            var tr = document.createElement('tr');
            for (var j = 0; j < colMatrixNum; j++) 
            {
                var td = document.createElement('td');
                if ((i + j) % 2 === 0) 
                {
                    td.setAttribute('class', 'cell blackcell');
                    tr.appendChild(td);
                }
                else 
                {
                    td.setAttribute('class', 'cell whitecell');
                    tr.appendChild(td);
                }
            }
            ChessTable.appendChild(tr);
        }
        center.appendChild(ChessTable);
    
        ChessTable.setAttribute('cellspacing', '0');
        ChessTable.setAttribute('width', '270px');
        document.body.appendChild(center);
       
    }, [onSubmit])

    return (
        <div>   
            <div>
                <h1>I am a ChessMaker.</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" {...register("matrixNumber")}/>
                <input type="submit" />
                </form>
                <button onClick={RefreshPage}>Refresh</button>
            </div>    
        </div>
    )
}
