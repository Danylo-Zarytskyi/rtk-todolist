// components/SwapiResult.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

const SwapiResult = () => {
    const { name, loading, error } = useSelector((state: RootState) => state.swapi);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
        <div>
            {name ? <p>свапі нейм: {name}</p> : <p>No data from SWAPI.</p>}
        </div>
    );
};

export default SwapiResult;
