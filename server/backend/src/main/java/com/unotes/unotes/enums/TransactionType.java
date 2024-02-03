package com.unotes.unotes.enums;

public enum TransactionType {
    createNote("create_note"),
    updateNote("update_note"),
    deleteNote("delete_note"),
    readNote("read_note");

    String value;

    TransactionType(String value){
        this.value = value;
    }

}
