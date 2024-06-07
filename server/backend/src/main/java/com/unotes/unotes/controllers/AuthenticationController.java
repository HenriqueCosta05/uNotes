import com.unotes.unotes.models.AuthenticationResponse;
import com.unotes.unotes.models.User;
import com.unotes.unotes.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        AuthenticationResponse authenticationResponse = authenticationService.register(request);
        // Return response along with token set in cookie
        return ResponseEntity.ok()
                .header("Set-Cookie", "token=" + authenticationResponse.getToken() + "; Path=/; HttpOnly")
                .body(authenticationResponse);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<AuthenticationResponse> login (
            @RequestBody User request,
            HttpServletResponse response
    ) {
        AuthenticationResponse authenticationResponse = authenticationService.authenticate(request, response);
        // Return response along with token set in cookie
        return ResponseEntity.ok()
                .header("Set-Cookie", "token=" + authenticationResponse.getToken() + "; Path=/; HttpOnly")
                .body(authenticationResponse);
    }
}
