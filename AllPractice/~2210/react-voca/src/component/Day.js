import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3010/words?day=${day}`);

  // const [words, setWords] = useState([]);
  //
  // useEffect(() => {
  //   fetch(`http://localhost:3010/words?day=${day}`)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
