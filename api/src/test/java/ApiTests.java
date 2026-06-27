import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.demoapp.demo.service.UserService;

public class ApiTests {

    @Test
    @DisplayName("Deve aceitar e-mail válido")
    void deveAceitarEmailValido() {
        UserService service = new UserService(null);

        assertTrue(
            service.isEmailValid("teste@email.com")
        );
    }

    @Test
    @DisplayName("Deve rejeitar e-mail sem @")
    void deveRejeitarEmailInvalido() {
        UserService service = new UserService(null);

        assertFalse(
            service.isEmailValid("testeemail.com")
        );
    }

    @Test
    @DisplayName("Deve aceitar senha válida")
    void deveAceitarSenhaValida() {
        UserService service = new UserService(null);

        assertTrue(
            service.isPasswordValid("Senha123!")
        );
    }

    @Test
    @DisplayName("Deve rejeitar senha sem caractere especial")
    void deveRejeitarSenhaSemCaractereEspecial() {
        UserService service = new UserService(null);

        assertFalse(
            service.isPasswordValid("Senha123")
        );
    }

    @Test
    @DisplayName("BUG: não deveria aceitar e-mail sem domínio")
    void deveriaRejeitarEmailSemDominio() {
        UserService service = new UserService(null);

        assertFalse(
            service.isEmailValid("teste@")
        );
    }
}