import React from "react";
import styles from "../../styles/Home.module.scss";
import roadmap from "../../public/whitepaper-roadmap.jpg";
import Particles from "../../components/Particles";
import FadeInSection from "../../components/isVisible";
import Link from "next/link";
function Whitepaper() {
  return (
    <>
      <div>
        <div className={`${styles.jumbotron} ${styles.jumbotronBackground}`}>
          <Particles />
          <FadeInSection className={styles.jumbotronTitleSection}>
            <h1 className={styles.primaryTitle}>Whitepaper</h1>
            <hr />
            <p className={`${styles.textLead} ${styles.white}`}>
              El primer Club Social Descentralizado que congrega a aficionados
              de los <b>NFT&#39;S</b>, profesionales, emprendedores y
              empresarios, para desarrollar sinergias positivas en todo el
              mundo.
            </p>
            <p className={`${styles.textLead} ${styles.white}`}>
              Cada miembro y accionista del Club obtiene beneficios económicos
              ilimitados, basados en la economía del proyecto.
            </p>
            <div className={styles.spanArrow}>
              <Link href={"#inicio"}>
                <span
                  className={`material-symbols-outlined notranslate ${styles.white} ${styles.textCenter}`}
                >
                  arrow_downward
                </span>
              </Link>
            </div>
          </FadeInSection>
          <div></div>
        </div>

        <div className={styles.whitepaper}>
          <div className={styles.pageSection}>
            <p className={styles.textLead} id="inicio">
              <b>DISCOPER SOCIAL CLUB</b>, es un Club Social Descentralizado, en
              el cual los socios o accionistas obtienen un porcentaje de
              distribución de los ingresos. Cada Token de NFT representa a una
              acción del club, estos están enlazados 1=1 dicha acción otorga
              automáticamente acceso a todos los beneficios que la membresía
              representa, los NFTs y la membresía son transferibles con todos
              los beneficios, mediante la compra y venta en nuestro Marketplace
              u otros mercados externos.
            </p>
            <h1>Las membresías</h1>
            <p className={styles.textLead}>
              Los NFTs o membresías, son activadas y comienzan a generar
              beneficios al momento de ser adquiridos en el Marketplace de{" "}
              <b>DISCOPER SOCIAL CLUB</b>, los NFT no generan ganancias
              retroactivas de ventas anteriores, esta se activa es al momento de
              su compra.
            </p>
            <h1>Tipos de membresía</h1>
            <p className={styles.textLead}>
              1- <b>DISCOPER FOUNDER</b> tiene un número limitado de 5.540
              membresías o NFTs, estos serán minteados de forma progresiva y
              escalonada como se indica en el mapa de ruta, siendo su primer
              minteo de un 10% del monto total equivalente a 554 NFTs, tres (3)
              minteos de 20% cada uno y un ultimo minteo de 10% para un total de
              100% de los 5540 NFTs.
            </p>
            <h1>Beneficios</h1>
            <p className={styles.textLead}>
              Los usuarios que adquieren uno o más <b>DISCOPER FOUNDER</b>{" "}
              obtienen un porcentaje del 20% del monto en que se vendan los NFTs
              que son adquiridos subsiguientes a cada NFT comprado, también
              reciben un 20% de la venta de todas las colecciones que se generen
              de parte de <b>DISCOPER</b> de por vida (este monto será
              distribuido equitativamente entre todos los miembros de la
              categoría <b>FOUNDER</b> ). Adicional a esto, recibe un 3.5% por
              venta o reventas futuras que realicen los miembros del Club en
              todas colecciones, y este monto también es distribuido entre todos
              los miembros de la categoría.
            </p>
            <h1>
              ¿Quién puede ser un <b>DISCOPER FOUNDER</b>?
            </h1>
            <p className={styles.textLead}>
              Cualquier usuario que se registre en{" "}
              <a href=" https://discoper.io/"> https://discoper.io/</a> y
              adquiera al menos un (1) NFT se convierte en{" "}
              <b>DISCOPER FOUNDER</b>, también aquellos usuarios que hayan
              recibido de parte de un tercero al menos un (1) NFT pasa a ser un{" "}
              <b>DISCOPER FOUNDER</b>.
            </p>
            <p className={styles.textLead}>
              2-DISCOPER ASSOSIATE Todo usuario que adquiere uno o más NFTs de
              <b>DISCOPER</b> fuera de la edición <b>FOUNDER</b> forma parte de{" "}
              <b>DISCOPER ASSOCIATE </b> y obtiene beneficios según esta
              categoría. Los socios de esta membresía obtienen un 10% de la
              venta de todas las nuevas colecciones que se generen después de
              adquirido, este monto será (distribuido equitativamente entre
              todos los miembros de esta categoría). Adicionalmente, recibirán
              de por vida un 2.5% por venta o reventas futuras que realicen los
              miembros del Club en todas colecciones y este monto también es
              distribuido entre todos los miembros de la categoría.
            </p>
            <h1>
              ¿Quién puede ser un <b>DISCOPER ASSOCIATE</b>?
            </h1>
            <p className={styles.textLead}>
              Todos los usuarios que adquieran al menos un (1) NFT creado por
              <b>DISCOPER</b> que no sea <b>FOUNDER</b> pasa a ser{" "}
              <b>DISCOPER ASSOCIATE</b>
            </p>
            <h1>El problema</h1>
            <p className={styles.textLead}>
              Es bien sabido que en la mayoría de los proyectos NFT la
              distribución de las ganancias va dirigida al equipo de desarrollo
              o al creador de los NFTs, que ofrecen proyectos sin una base
              sustentable o poco segura, el 90% de estos proyectos crean en la
              comunidad una esperanza meramente especulativa y en la que muchos
              usuarios han invertido y terminan perdiendo su capital, algunos
              ofrecen proyectos repetitivos, copias exactas una de otras en las
              que después de vender sus NFTs recaudan el capital de las ventas y
              desaparecen, dejando a la comunidad simplemente con un NFT sin un
              valor significativo en el mercado. También está el riesgo de los
              inversionistas que al comprar un NFT en un determinado precio y en
              una criptomoneda volátil y a los pocos días esa moneda baje de
              precio depreciando de forma inmediata la inversión realizada.
            </p>
            <p className={styles.textLead}>
              Otro punto importante del problema es confiar en anónimos que
              ocultan su identidad detrás de un proyecto y al final no hay a
              quién culpar.
            </p>
            <h1>La solución</h1>
            <p className={styles.textLead}>
              En <b>DISCOPER SOCIAL CLUB</b> el objetivo es que todos los
              miembros obtengan beneficios equitativos, de forma sustentable y
              atractiva para que el proyecto continúe desarrollándose.
            </p>
            <p className={styles.textLead}>
              Al ser un <b>Club Social</b> con ganancias compartidas y de forma
              descentralizada no tendremos el problema de confiar en un proyecto
              o en anónimos ya que tanto la administración del dinero, como la
              sustentabilidad del proyecto y su continua evolución dependerá de
              todos por igual y las transacciones estarán visibles para un
              control público.
            </p>
            <p className={styles.textLead}>
              Las personas que dieron origen a <b>DISCOPER</b> están
              comprometidas con la constante evolución del proyecto, tienen sus
              nombres y caras al frente como muestra de la confianza que tienen
            </p>
            <p className={styles.textLead}>
              Para brindar otra solución a la comunidad fanática que invierte en
              los NFTs y tiene el temor de perder dinero debido a la volatilidad
              de las criptomonedas, en <b>DISCOPER</b> las transacciones son
              realizadas en una establecoin BUSD vinculada a la paridad del
              dólar americano, de esa forma nuestra inversión está protegida de
              dicha volatilidad.
            </p>
            <h1>Estrategia de Marketing a utilizar</h1>
            <p className={styles.textLead}>
              La colección <b>DISCOPER FOUNDER</b> está diseñada fuera de lo
              común y se compone de 5540 artes distintas de NFT que refieren de
              forma grafica sucesos, acontecimientos o situaciones de
              personalidades del mundo, esta colección se divide en varias
              subcolecciones, de entre 5 y 30 cada una, de forma tal que los
              coleccionistas puedan tener la oportunidad de armar cada
              subcoleccion por separado, según sea su gusto. Cada NFT tiene un
              numero asignado en un álbum o galería general. Los NFT se van a ir
              minteando en la galería a la vista pública según se vayan creando,
              los usuarios que deseen comprar un NFT en particular deberán
              comprar un huevo sorpresa y al destapar aleatoriamente le será
              descubierto el NFT adquirido, si este no es el que el desea podrá
              cambiarlo a otro usuario que lo desee o venderlo en el
              Marketplace, cada usuario es libre de especular con el precio de
              su NFT de la forma que considere pertinente, solo debe tener en
              cuenta que al vender o cambiar su NFT está traspasando o cediendo
              los derechos asociados al NFT. Los NFT adquiridos mas tempranos
              que otros, reciben mayor distribución de los subsiguientes NFT
              adquiridos por otras personas e incluso por el mismo usuario.
            </p>
            <p className={styles.textLead}>
              Para los lanzamientos de venta, hemos creado un plan de
              recompensas por invitado, esta estrategia de Marketing consiste en
              premiar con una bonificación especial del 5% de las compras que
              realice cada usuario que se registre por su link de invitado.
            </p>
            <p className={styles.textLead}>
              Las distintas etapas de Minteo tienen distintos precios,
              comenzando la primera en 25 BUSD cada NFT, la segunda en 250 BUSD
              cada NFT y las próximas serán los socios <b>FOUNDER</b> mediante
              votación los que designen los precios de lanzamiento.
            </p>
            <p className={styles.textLead}>
              Los días de lanzamiento serán publicados con anticipación y los
              usuarios deberán estar previamente registrados con su link de
              invitados y tener sus wallets Metamask conectadas a la DAPP de
              <b>DISCOPER</b> para poder comprar y recibir sus ganancias.
            </p>
            <h1>Objetivos Futuros a Corto Plazo</h1>
            <p className={styles.textLead}>
              En <b>DISCOPER</b> queremos poner al servicio de los socios una
              plataforma interactiva, justa, sencilla e intuitiva en la que los
              miembros puedan crear y vender sus propias colecciones en un
              Marketplace de interés social, que todos tengamos un espacio en
              donde los creadores de contenido, streamers, educadores, gamers,
              desarrolladores personales y usuarios en general, puedan crear y
              personalizar su propio espacio dentro de la WEB3.0, transmitir vía
              Streaming y más. Donde por medio de una colección de NFT puedan
              crear y personalizar su propio Club Privado, con acceso bajo
              suscripción mediante los NFTs, sin necesidad de pagar altas
              comisiones a terceros y lo mejor de todo es que seremos una
              comunidad consolidada, en la que todos los miembros son verdaderos
              fanáticos NFT.
            </p>
            <h1>Tecnología utilizada</h1>
            <p className={styles.textLead}>
              <b>DISCOPER SOCIAL CLUB</b> utilizará la tecnología blockchain de
              la red de Binance Smart Chain (BSC) para la creación y ejecución
              de los contratos inteligentes y transacciones. La moneda
              transaccional de
              <b>DISCOPER</b> es BUSD. Para profundizar en los detalles de
              contratos inteligentes puede ingresar en{" "}
              <a href="https://gitlab.com/discoper">
                https://gitlab.com/discoper
              </a>{" "}
              todas las transacciones vinculadas a cada NFT estarán registradas
              de forma pública dentro de la blockchain.
            </p>
            <h1>Distribución automatizada de las ganancias</h1>
            <p className={styles.textLead}>
              Debido a las comisiones de red, gastos por gas utilizado en la
              ejecución de contratos inteligentes, se creó un software bajo
              contrato Scrow en el que las recompensas o ganancias generadas por
              los NFTs van a una wallet vinculada a un contrato inteligente, que
              cada vez que acumula 500 BUSD lo distribuye entre 100 NFT según la
              categoría, esto quiere decir que estos NFTs o usuarios reciben 5
              BUSD en sus wallet, posteriormente y en orden cronológico según la
              activación de la membresía ira recibiendo otro lote de 100
              beneficiarios, esto se hará en un proceso cíclico, justo y
              equitativo, todo esto será auditable de forma publica en la BSC
              SCAN.
            </p>
            <h1>TOKENOMIC</h1>
            <h2>DISTRIBUCIÓN</h2>
            <p className={styles.textLead}>
              <b>40%</b> Destinado para cubrir gastos operativos, sueldos y
              salarios, artistas creadores de NFTs, desarrollo y mejoras del
              proyecto, pago de servidores, etc.
            </p>
            <p className={styles.textLead}>
              <b>20%</b> Destinado a repartir entre los miembros fundadores que
              poseen NFTs <b>DISCOPER FOUNDER</b>
            </p>
            <p className={styles.textLead}>
              <b>20%</b> Destinado a la inversión en Marketing, financiamiento
              de eventos, concursos y viajes exclusivos para los socios de
              DISCOPER SOCIAL CLUB, además de la creación de <b>DISCOPER</b>{" "}
              FUNDATION (Fundación creada con el objetivo de atender a
              comunidades desfavorecidas).
            </p>
            <p className={styles.textLead}>
              <b>10%</b> De las ganancias será distribuida de forma
            </p>
            <p className={styles.textLead}>
              <b>10%</b> Distribución especial
            </p>
            <ol>
              <li className={styles.textLead}>
                <b>3.5%</b> Adicional, por venta primaria de la colección o
                reventas futuras, para los NFTs <b>DISCOPER FOUNDERS</b>.
              </li>
              <li className={styles.textLead}>
                <b>2.5%</b> Adicional por venta primaria de la colección o
                reventas futuras, para los NFTs <b>DISCOPER ASSOCIATES</b>.
              </li>
              <li className={styles.textLead}>
                <b>2.5%</b> Adicional por venta primaria de la colección o
                reventas futuras, para los NFTs <b>DISCOPER ASSOCIATES</b>.
              </li>
              <li className={styles.textLead}>
                <b>1%</b> Comisiones por venta primaria de la colección o
                reventas futuras, para link de afiliados.
              </li>
              <li className={styles.textLead}>
                <b>3%</b> Por venta primaria de la colección o reventas futuras,
                para el equipo de desarrollo.
              </li>
            </ol>
            <img src={roadmap.src} alt="" />
            <p className={styles.textLead}></p>
            <p className={styles.textLead}></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whitepaper;
