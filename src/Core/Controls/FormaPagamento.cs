using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Core.Controls
{
    public enum FormaPagamento
    {
        [Description("01 - Dinheiro")]
        Dinheiro = 1,
        [Description("02 - Cheque")]
        Cheque = 2,
        [Description("03 - Cartão de Credito")]
        CartaoCredito = 3,
        [Description("04 - Cartão de Debito")]
        CartaoDebito = 4,
    }
}
