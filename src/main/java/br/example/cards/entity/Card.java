package br.example.cards.entity;

/**
 * Created by Eduardo on 16/04/2016.
 */
public class Card {

    private String anotacao;
    private String cor;

    public Card(String anotacao, String cor){
        this.anotacao = anotacao;
        this.cor = cor;
    }

    public String getAnotacao() {
        return anotacao;
    }

    public String getCor() {
        return cor;
    }
}
