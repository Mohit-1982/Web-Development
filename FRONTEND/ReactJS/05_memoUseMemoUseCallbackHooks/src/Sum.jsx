import React from 'react';

    const Sum = React.memo((props) => {
        function calculateSum() {
            console.log('Render 2');
            let sum = 0;
            for (let i = 1; i <= props.number; i++) {
                sum += i;
            }

            return sum;
        }
        console.log('Render: 1');
        const total = calculateSum();
        return (
            <>
                <h1>Sum calculated</h1>
                <h2>Sum is : {total}</h2>
            </>
        )
    })

export default Sum