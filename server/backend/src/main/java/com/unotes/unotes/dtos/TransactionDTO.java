package com.unotes.unotes.dtos;

import com.unotes.unotes.enums.TransactionType;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TransactionDTO {
    private Integer id;
    private Long registry;
    private TransactionType type;

}
