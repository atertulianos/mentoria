import React from "react";
import { Container } from "./styles";

export default function SideBar() {
    return (
        <Container>
            <main>
                <section className="d-flex">
                    <div id="list-example" className="list-group w-25 px-3">
                        <a className="list-group-item list-group-item-action text-start" href="#list-item-1">What is Lorem Ipsum?</a>
                        <a className="list-group-item list-group-item-action text-start" href="#list-item-2">Why do we use it?</a>
                        <a className="list-group-item list-group-item-action text-start" href="#list-item-3">Where does it come from?</a>
                        <a className="list-group-item list-group-item-action text-start" href="#list-item-4">Where can I get some?</a>
                    </div>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example w-75 px-3 SideBar-content">
                        <h4 id="list-item-1">
                            What is Lorem Ipsum?
                        </h4>
                        <p className="text-start mt-3 mb-5 paragrafos">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4 id="list-item-2 text-start">
                            Why do we use it?
                        </h4>
                        <p className="text-start mt-3 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4 id="list-item-3 text-start">
                            Where does it come from?
                        </h4>
                        <p className="text-start mt-3 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4 id="list-item-4 text-start">
                            Where can I get some?
                        </h4>
                        <p className="text-start mt-3 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </section>
            </main>
        </Container>
    )
}