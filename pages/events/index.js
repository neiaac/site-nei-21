import Calendar from '../../components/events/calendar';
import Title from '../../components/shared/title';
import Button from '../../components/shared/button';
import Window from '../../components/shared/window';
import { events, images } from '../../styles/events.module.scss';

const Events = () => {

  return (
    <main className={events}>
      <Title title="plano_de_atividades" />
      <Button color="blue" text="21-22" />
      <section>
        <Calendar />
        <div className={images}>
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fconvivio-moelas-2.jpg?alt=media&token=5375b277-ef65-4c3f-8bb3-27ab991811e1" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fjornadas-ecd.jpg?alt=media&token=c0a3a8c3-9374-42bf-8481-6cc18910423c" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fjogos-sem-fronteiras.jpg?alt=media&token=8741ec76-50e4-451d-99b4-442174c428b4" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fworkshop-django.jpg?alt=media&token=14077d61-c702-48a2-9ad7-e1c078815335" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fworkshop-indesign.jpg?alt=media&token=1bfdb585-86bf-431f-bffd-bd906e37bff6" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fmagusto.jpg?alt=media&token=816ae716-b7a1-4a0b-9178-e1709ffc7a61" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fconversas-ei.jpg?alt=media&token=e73d43ee-8b59-47bf-8c84-2cb3c9c9b967" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fworkshop-htmlcss.jpg?alt=media&token=cfee0cb2-cf61-4872-b698-927354950e75" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fpadel.jpg?alt=media&token=5d9433bf-b505-4518-bf46-79237f59728c" />
          <Window img="https://firebasestorage.googleapis.com/v0/b/site-nei.appspot.com/o/events%2F21_22%2Fxadrez.jpg?alt=media&token=b48ccb48-b669-4d34-a086-b29e0fd8e606" />
        </div>
      </section>
    </main>
  );
};

export default Events;
